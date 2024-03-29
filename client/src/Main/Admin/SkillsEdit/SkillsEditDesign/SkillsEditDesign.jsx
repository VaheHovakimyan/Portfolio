import '../../../Pages/Skills/Skills.scss';
import '../../../Pages/Skills/SkillsMedia.scss';
import '../SkillsEdit.scss';
import SkillsEditDesignItems from './SkillsEditDesignItems/SkillsEditDesignItems';
import SkillsEditDesignForm from './SkillsEditDesignForm/SkillsEditDesignForm';


export default function SkillsEditDesign({ designData, setDesignData }) {


    const onDelete = function (id) {

        (async function () {

            await fetch("/db/admin/design/data/export", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    id: id
                })
            })
                .then((stream) => stream.json())
                .then((data) => {
                    setDesignData(data);
                })

        })()

    }


    return (

        <div className='skills_page'>

            <SkillsEditDesignItems
                designData={designData}
                onDelete={onDelete}
            />

            <SkillsEditDesignForm
                setDesignData={setDesignData}
            />

        </div>

    )
}