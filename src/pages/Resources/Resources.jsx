import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import BanglaResources from "./BanglaResources";
import EnglishResources from "./EnglishResources";

const Resources = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Bangla Resources");
  const options = ["Bangla Resources", "English Resources"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <section>
      {/* https://www.nakbanglapodcast.com/ */}

      {/* Dropdown menu */}
      <Dropdown
        toggleDropdown={toggleDropdown}
        selectedOption={selectedOption}
        isOpen={isOpen}
        options={options}
        selectOption={selectOption}
        setSelectedOption={setSelectedOption}></Dropdown>

        {
            selectedOption == "Bangla Resources" ? <BanglaResources></BanglaResources> : <EnglishResources></EnglishResources>
        }

    </section>
  );
};

export default Resources;
