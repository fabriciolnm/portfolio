import { Container } from './styles'


export function Card({ url, title, github, livedemo }){
    return(
    <Container>
            <section className="card">
                <img src={url} alt='image of a dish' />
                
                <h2>{title}</h2>

                <div className='btnsection'>
                    <a href={github} className='btn1' target='_blank'>Github</a>
                    <a href={livedemo} className='btn2' target='_blank'>Live demo</a>
                </div>
                
            </section>
    </Container>
    )
}       