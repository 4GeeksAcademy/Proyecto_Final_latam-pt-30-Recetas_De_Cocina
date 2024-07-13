import React from 'react';




export const Categories = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Postres" />
                    <div className="card-body">
                        <h4 className="card-title">Postres</h4>
                        <p className="card-text">Encuentra deliciosos postres para endulzar tu día.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Ver Recetas</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Desayunos" />
                    <div className="card-body">
                        <h4 className="card-title">Desayunos</h4>
                        <p className="card-text">Comienza tu día con energía con nuestras recetas de desayunos.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Ver Recetas</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Almuerzo" />
                    <div className="card-body">
                        <h4 className="card-title">Almuerzos</h4>
                        <p className="card-text">Descubre almuerzos nutritivos y deliciosos.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Ver Recetas</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Recetas Keto" />
                    <div className="card-body">
                        <h4 className="card-title">Recetas Keto</h4>
                        <p className="card-text">Recetas bajas en carbohidratos para tu dieta keto.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Ver Recetas</a>
                    </div>
                </div>
            </div>
        </div>

    );
};



