import { Container } from './styles'

import { BsPatchCheckFill } from 'react-icons/bs'


export function Bio(){
    return(
    <Container>
            <section className="bio">
                <h2>Skills</h2>

                <div className='biocard'>
                    <h3>Front end Development</h3>
                    <ul>
                        <li><BsPatchCheckFill />HTML</li>
                        <li><BsPatchCheckFill />CSS</li>
                        <li><BsPatchCheckFill />Javascript</li>
                        <li><BsPatchCheckFill />React</li>
                        <li><BsPatchCheckFill />Tailwind</li>
                        <li><BsPatchCheckFill />Git</li>
                    </ul>

                </div>
                
            </section>
    </Container>
    )
}       