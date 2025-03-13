import React, { useState, useEffect, useContext } from 'react';
import './User.css';
import { StoreContext } from '../../context/StoreContext';

export default function User() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const { url, token,setToken } = useContext(StoreContext);

    useEffect(() => {
        const UserDetails = async () => {
            try {
                const response = await fetch(`${url}/api/user/details`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setLoading(false);
            }
        };

        UserDetails();
    }, [url, token]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
      }
    const handleImageUpload = async () => {
        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('profileImage', selectedFile);

        try {
            const response = await fetch(`${url}/api/user/profileimg`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                setData((prevData) => ({
                    ...prevData,
                    profileImage: result.profileImage,
                }));
                setSelectedFile(null); // Clear the selected file after successful upload
            }
        } catch (error) {
            console.error("Error uploading profile image:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-content">
            <div className="profile-info">
               { /*<div className="profile-img">
                    {data.profileImage ? (
                        <img src={`${url}/uploads/${data.profileImage}`} alt="Profile" />
                    ) : (
                        <img src="/path/to/default/profile/image.jpg" alt="Default Profile" />
                    )}
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleImageUpload} className='save'>Save</button>
                </div>*/}
                <img src="/profile.jpg" alt="Default Profile" />
                <img src="/profile_image.png" alt="" />
                <div className="profile-details">
                    <h2>{data.name || "User Name"}</h2>
                    <p>{data.email || "user@example.com"}</p>
                </div>
                <button onClick={logout} >Logout</button>
            </div>            
        </div>
    );
}

