import HomeIcon from "/public/assets/images/slider.jpg";
import CategoryIcon from "/public/assets/images/pic-two.png";
import UserIcon from "/public/assets/images/wich-city.png";

// import ListIcon from "@/assets/images/list.svg";
// import HeartIcon from "@/assets/images/heart-2.svg";
// import SupportIcon from "@/assets/images/support.svg";
// import LogoutIcon from "@/assets/images/logout.svg";
// import LocationIcon from "@/assets/images/location.svg";

function useMenus() {
  const headerMenu = [
    {
      id: 1,
      name: "Dubai",
      href: "/",
      icon: "bg-dubai-easy-icon",
    },
    {
      id: 2,
      name: "Chatroom",
      href: "/",
      icon: "bg-chatroom-easy-icon",
    },
    {
      id: 3,
      name: "Store",
      href: "/",
      icon: "bg-store-easy-icon",
    },
    {
      id: 4,
      name: "Map",
      href: "/",
      icon: "bg-map-easy-icon",
    },
  ];

  const sliderItems = [
    {
      id: 1,
      imageUrl: HomeIcon,
    },
    {
      id: 2,
      imageUrl: HomeIcon,
    },
    {
      id: 3,
      imageUrl: CategoryIcon,
    },
  ];

  const sliderNotificationItems = [
    {
      id: 1,
      name: "Ali Johnson",
      notification: "I Need a place to stay for 3 days in Dubai ...",
    },
    {
      id: 2,
      name: "Taghi Johnson",
      notification: "I Need a palace to stay for 3 days in Dubai ...",
    },
    {
      id: 3,
      name: "Naghi Johnson",
      notification: "I Need a Zoo to stay for 3 days in Dubai ...",
    },
    {
      id: 4,
      name: "Nali Johnson",
      notification: "I Need a Motel to stay for 3 days in Dubai ...",
    },
  ];

  const LearnLanguagesItems = [
    {
      id: 1,
      name: "English",
      icon: "bg-england-flag",
    },
    {
      id: 2,
      icon: "bg-germany-flag",
      name: "German",
    },
    {
      id: 3,
      icon: "bg-korea-flag",
      name: "Korean",
    },
    {
      id: 4,
      icon: "bg-china-flag",
      name: "Chinese",
    },
    {
      id: 5,
      icon: "bg-japan-flag",
      name: "Japanese",
    },
    {
      id: 6,
      icon: "bg-russia-flag",
      name: "Russian",
    },
    {
      id: 7,
      icon: "bg-turkey-flag",
      name: "Turkish",
    },
    {
      id: 8,
      name: "Dutch",
      icon: "bg-holland-flag",
    },
    {
      id: 9,
      name: "Swedish",
      icon: "bg-sweden-flag",
    },
    {
      id: 10,
      name: "French",
      icon: "bg-france-flag",
    },
    {
      id: 11,
      name: "Spanish",
      icon: "bg-spain-flag",
    },
    {
      id: 12,
      name: "Italian",
      icon: "bg-italy-flag",
    },
    {
      id: 13,
      name: "American",
      icon: "bg-american-flag",
    },
  ];

  const NeedItems = [
    {
      id: 1,
      name: "Health & Wellness",
      icon: "bg-health-services-icon",
    },
    {
      id: 2,
      name: "Transportation & Automotive",
      icon: "bg-transportation-services-icon",
    },
    {
      id: 3,
      name: "Entertainment & Media",
      icon: "bg-entertainment-services-icon",
    },
    {
      id: 4,
      name: "Education & Training",
      icon: "bg-education-services-icon",
    },
    {
      id: 5,
      name: "Travel & Tourism",
      icon: "bg-travel-services-icon",
    },
    {
      id: 6,
      name: "Food & Beverage",
      icon: "bg-food-services-icon",
    },
    {
      id: 7,
      name: "Home Services",
      icon: "bg-home-services-icon",
    },
    {
      id: 8,
      name: "Business Services",
      icon: "bg-business-services-icon",
    },
    {
      id: 9,
      name: "Store",
      icon: "bg-stores-services-icon",
    },
    {
      id: 10,
      name: "Lifestyle & Personal Services",
      icon: "bg-lifestyle-services-icon",
    },
    {
      id: 11,
      name: "Real Estate & Property Management",
      icon: "bg-real-estate-services-icon",
    },
    {
      id: 12,
      name: "Non-profit & Community Services",
      icon: "bg-community-services-icon",
    },
  ];

  return {
    headerMenu,
    sliderItems,
    sliderNotificationItems,
    LearnLanguagesItems,
    NeedItems,
  };
}

export default useMenus;
