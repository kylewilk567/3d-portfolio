import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { github, linkedin } from '../assets';

const Sites = () => {
    return (
        <div
            className="flex gap-5 float-right">
            <a href="https://www.linkedin.com/in/kyle-wilkinson7/" target="_blank">
                <img
                        src={linkedin}
                        alt="linkedin"
                        className='w-[25px] h-[25px] object-right'
                        />
            </a>
             <a href="https://github.com/kylewilk567" target="_blank">
                <img
                        src={github}
                        alt="github"
                        className='w-[30px] h-[30px] object-right'
                        />
            </a>
        </div>
    )
}

export default SectionWrapper(Sites, "")