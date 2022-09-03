import React from "react";

function Card(props) {
    return (
        <>
            <section>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.img} className="img-fluid rounded-start places" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.location}</h5>
                                <p className="card-text">{props.description}</p>
                                <p className="card-text"><small className="text-muted">{props.title}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Card