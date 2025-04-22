export default function Footer() {
    return (
        <footer className="bg-secondary text-white mt-5 py-4">
            <div className="container text-center">
                {/* Íconos de redes */}
                <div className="mb-3">
                    <a
                        href="https://www.instagram.com/hezron_ac/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-4 mx-3"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/hezron.araya.5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-4 mx-3"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://github.com/Hezroiner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-4 mx-3"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                </div>

                {/* Información personal */}
                <div className="text-white text-center">
                    <p className="mb-1">Copyright © | 2025 Hezron Araya Castañeda</p>
                </div>
            </div>
        </footer>
    )
}
