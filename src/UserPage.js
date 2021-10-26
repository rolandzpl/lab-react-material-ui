import React from "react";

export default function AboutPage() {
  const profilePhotoUrl = "images/photo.jpg";
  const profilePhotoAlt = "Profile user's photo";

  return (
    <div>
      <h1>About</h1>
      <img src={profilePhotoUrl} alt={profilePhotoAlt} />
    </div>
  );
}
