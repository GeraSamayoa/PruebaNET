import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import ImageRegistro from '../../assets/registro.png';
import ImagenConsulta from '../../assets/consulta.png';




const Home = () => {

    return (
        <>
            <Nav />
            <div>
                <div className="text-white p-5 " >
                    <h1 className="m-4">Gestion de Alumnos</h1>
                </div>
                <div className="d-flex justify-content-center gap-3">
                    <div>
                        <div className="border m-4 d-flex flex-column align-items-center gap-4 fs-3 text-white" style={{ borderRadius: "15px", width: "20.5rem", height: "20.5rem" }}>
                            <img src={ImageRegistro} alt="Registro" className="img-fluid m-2" style={{ width: "15rem", height: "14rem" }}></img>
                            <div>
                                <p>Registro de Alumnos</p>
                            </div>
                        </div>
                        <Link to="/registro" className="btn btn-primary m-2">Ingresar</Link>
                    </div>
                    <div>
                        <div className="border m-4 d-flex flex-column align-items-center gap-4 fs-3 text-white" style={{ borderRadius: "15px", width: "20.5rem", height: "20.5rem" }}>
                            <img src={ImagenConsulta} alt="Consulta" className="img-fluid m-2" style={{ width: "15rem", height: "14rem" }}></img>
                            <div>
                                <p>Consultar Alumnos</p>
                            </div>
                        </div>
                        <Link to="/consulta" className="btn btn-primary m-2 ">Ingresar</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;