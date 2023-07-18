import { useEffect, useState } from "react";




export default function SkillEditFrontItems({ frontEndData, setFrontEndData, onDelete }) {

    const [displayFrontSkill, setDisplayFrontSkill] = useState(false);


    return (

        <>

            {/* <div className="display_front_skill_button_div">

                <button onClick={(evt) => {
                    evt.preventDefault();
                    setDisplayFrontSkill(!displayFrontSkill);
                }}
                    className="display_front_skill_button"
                >{displayFrontSkill ? "Close Front-End skills" : "Open Front-End skills"}</button>

            </div> */}

            <section className='skills_section'>


                <h2 className='skills_page_title'>Front End skills</h2>





                <div className='skills_div_flex' 
                // style={{ display: `${displayFrontSkill ? "block" : "none"}` }}
                 >
                    <div className='skills_div'>
                        {frontEndData.map((item) => {
                            return (
                                <div
                                    className="skill_animation" style={{
                                        background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                                    }}
                                    key={item.id}
                                >
                                    <div className="skill_percentage_animation">
                                        <button className='delete_skill_button' onClick={(evt) => {
                                            evt.preventDefault();
                                            onDelete(item._id);
                                        }}>X</button>
                                        <div className="skill_icon_text">
                                            <p className="skills_text">{item.name}</p>
                                            <img src={item.img} alt={item.alt} className='icon_img' />
                                            <p className="percentage_text">{item.percentage}%</p>
                                        </div>
                                        <div className="skill_opacity"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>

        </>
    )
}