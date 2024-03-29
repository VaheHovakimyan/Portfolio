import { useState, useEffect } from "react";
import SkillsEditFrontEnd from "./SkillsEditFrontEnd/SkillsEditFrontEnd";
import SkillsEditBackEnd from "./SkillsEditBackEnd/SkillsEditBackEnd";
import SkillsEditDesign from "./SkillsEditDesign/SkillsEditDesign";
import SkillsEditOther from "./SkillsEditOther/SkillsEditOther";


export default function SkillsEditMain() {


    const [frontEndData, setFrontEndData] = useState([]);
    const [backEndData, setBackEndData] = useState([]);
    const [designData, setDesignData] = useState([]);
    const [otherData, setOtherData] = useState([]);


    useEffect(() => {

        Promise.all([
            fetch("/db/skills/frontEnd"),
            fetch("/db/skills/backEnd"),
            fetch("/db/skills/design"),
            fetch("/db/skills/other")
        ]).then((streams) => {
            return Promise.all(streams.map((stream) => stream.json()));
        }).then((data) => {
            const [frontEndInfo, backEndInfo, designInfo, otherInfo] = data;
            setFrontEndData(frontEndInfo);
            setBackEndData(backEndInfo);
            setDesignData(designInfo);
            setOtherData(otherInfo);
        }).catch((err) => {
            console.log(err);
        })

    }, [])


    return (
        <section className='skills_section'>
            <SkillsEditFrontEnd
                setFrontEndData={setFrontEndData}
                frontEndData={frontEndData}
            />

            <SkillsEditBackEnd
                setBackEndData={setBackEndData}
                backEndData={backEndData}
            />

            <SkillsEditDesign
                setDesignData={setDesignData}
                designData={designData}
            />

            <SkillsEditOther
                setOtherData={setOtherData}
                otherData={otherData}
            />
        </section>
    )
}