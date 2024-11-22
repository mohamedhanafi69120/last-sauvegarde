import React, { useState, useEffect } from "react";
import Account from "../../components/Account/Account";
import AccountList from "../../datas/AccountList.json";

const User = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  // Simuler une récupération des données initiales (ou utiliser Redux / API)
  useEffect(() => {
    const initialData = {
      username: "JohnDoe", // Exemple de valeur initiale
      firstname: "John",
      lastname: "Doe",
    };
    setUserInfo(initialData);
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = async () => {
    setIsEditing(false);

    // Exemple de sauvegarde via API (optionnel)
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer your-token-here`, // Remplacez par un token valide
        },
        body: JSON.stringify(userInfo), // Envoyer les données mises à jour
      });

      if (response.ok) {
        console.log("User Info Saved:", userInfo);
      } else {
        console.error("Failed to save user info");
      }
    } catch (error) {
      console.error("Error while saving user info:", error);
    }
  };

  return (
    <main className="mainBg">
      <div className="header">
        {!isEditing ? (
          <>
            <h1>
              Welcome back
              <br />
              {userInfo.username} ({userInfo.firstname} {userInfo.lastname})!
            </h1>
            <button className="edit-button" onClick={handleEditToggle}>
              Edit Name
            </button>
          </>
        ) : (
          <div className="edit-user-info">
            <h2>Edit user info</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={userInfo.username}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                First name:
                <input
                  type="text"
                  name="firstname"
                  value={userInfo.firstname}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Last name:
                <input
                  type="text"
                  name="lastname"
                  value={userInfo.lastname}
                  onChange={handleInputChange}
                />
              </label>
              <div>
                <button type="button" onClick={handleSave}>
                  Save
                </button>
                <button type="button" onClick={handleEditToggle}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      {AccountList.map((account) => (
        <Account
          key={account.id}
          title={account.title}
          price={account.price}
          text={account.text}
        />
      ))}
    </main>
  );
};

export default User;
