import SkillsEditFrontForm from './SkillsEditFrontForm/SkillsEditFrontForm';
import SkillEditFrontItems from './SkillsEditFrontItems/SkillsEditFrontItems';
import '../../../Pages/Skills/Skills.scss';
import '../../../Pages/Skills/SkillsMedia.scss';
import './SkillsEditFrontEnd.scss';


export default function SkillsEditFrontEnd({ frontEndData, setFrontEndData }) {



    const onDelete = function (id) {

        (async function () {

            await fetch("/db/admin/front/data/export", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    id: id
                })
            });


            await fetch("/db/admin/front/data/export")
                .then((stream) => stream.json())
                .then((data) => {
                    setFrontEndData(data);
                })

        })()

    }



    return (

        <div className='skills_page'>

            <SkillEditFrontItems
                setFrontEndData={setFrontEndData}
                frontEndData={frontEndData}
                onDelete={onDelete}
            />

            <SkillsEditFrontForm
                setFrontEndData={setFrontEndData}
            />

        </div>

    )
}