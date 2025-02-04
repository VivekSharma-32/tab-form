import React from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const TabForm = () => {
  const tabs = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Interests",
      component: <Interest />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
  ];
  return <div>TabForm</div>;
};

export default TabForm;
