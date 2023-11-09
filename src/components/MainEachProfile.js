import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate , Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Searsh from "../components/Searsh";
import Footer from "../components/Footer";
import style from "../sass/maineachprofile.module.scss";
import { UserContext } from "../utils/UserContext";
import EachLevel from "../components/EachLevel";
import {TbToolsOff} from 'react-icons/tb'
import {AiFillCaretDown} from 'react-icons/ai';
import {PiProjectorScreenChartBold} from 'react-icons/pi'
import {FaCode} from 'react-icons/fa';
import {TiHtml5} from 'react-icons/ti';
import {FaUpload} from 'react-icons/fa';
import {GiStarShuriken} from 'react-icons/gi';
import {BsFillCalendar2EventFill} from 'react-icons/bs';

function MainEachProfile({idCollectionValue}) {

    const [selectLocalStor, setSelectLocalStor] = useState()
    const [selectedValues, setSelectedValues] = useState([])
    const [selectValuePoject, setselectValuePoject] = useState([])
    const [selectedValuesTools, setSelectedValuesTools] =  useState([])
useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8081/api/get_languages/${idCollectionValue}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setSelectedValues(data);
          })
          .catch((error) => console.error(error));
      }, [idCollectionValue]);

      useEffect(() => {
        fetch(`http://localhost:8081/api/get_porject/${idCollectionValue}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data.length > 0) {
              localStorage.setItem("idProject", data[0].id);
              console.log("some peaple ok ", localStorage.getItem("idProject"))
            }
            setselectValuePoject(data);
          })
          .catch((error) => console.error(error));
      }, [idCollectionValue]);


      useEffect(() => {
        fetch(`http://localhost:8081/api/get_tools/${idCollectionValue}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            setSelectedValuesTools(data);
          })
          .catch((error) => console.error(error));
      }, [idCollectionValue]);

  return (
    <div className={style.container}>
       <div className={style.program}>
            <div className={style.itemsProgram}>
                <div className={style.contInsidProgram}>
                    <div className={style.titleProgram}>
                        <PiProjectorScreenChartBold className={style.iconLanguage}/>
                        <p className="par">Languages</p>
                        <AiFillCaretDown className={style.iconLanguage}/>
                    </div>
                    <div className={style.UnderConatProgram}>
                        {selectedValues.map((item, index) => (
                        <Link key={index} to="/Language#html" className={style.link}>
                            <div className={style.conatProItm}>
                                <FaUpload className={style.TiHtml5}/>
                                <p className="par"> - {item.languageName}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* another item */}
            <div className={style.itemsProgram}>
                <div className={style.contInsidProgram}>
                    <div className={style.titleProgram}>
                        <FaCode className={style.iconLanguage}/>
                        <p className="par">Projects</p>
                        <AiFillCaretDown className={style.iconLanguage}/>
                    </div>
                    <div className={style.UnderConatProgram}>
                    {selectValuePoject.map((item, index) => (
                    <Link key={index} to="/Language#html" className={style.link}>
                        <div className={style.conatProItm}>
                            <TiHtml5  className={style.TiHtml5}/>
                            <p className="par"> - {item.name_project}</p>
                        </div>
                    </Link>
                    ))}
                    </div>
                </div>
            </div>
            {/* another item */}
            {/* another item */}
            
       </div>
       <div className={style.program}>
            <div className={style.itemsProgram}>
                <div className={style.contInsidProgram}>
                    <div className={style.titleProgram}>
                        <BsFillCalendar2EventFill className={style.iconLanguage}/>
                        <p className="par">Tools</p>
                        <AiFillCaretDown className={style.iconLanguage}/>
                    </div>
                    <div className={style.UnderConatProgram}>
                        {selectedValuesTools.map((item, index) => (
                        <div key={index} className={style.conatProItm}>
                            <GiStarShuriken className={style.TiHtml5}/>
                            <p className="par"> - {item.name_tool}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
       {/* finish  itemsEvents */}
    </div>
  );
}

export default MainEachProfile;
