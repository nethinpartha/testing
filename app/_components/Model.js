"use client";
const Modal = ({ show, title }) => {
    const [visible, setVisible] = useState(show);
    if (!visible) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" onClick={() => { setVisible(false) }}>
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b">
                    {/* <h2 className="text-xl font-semibold">{title}</h2> */}
                    <button onClick={() => { setVisible(false) }} className="text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <div className="p-4 flex-col">
                    <div>
                        <img src="https://via.placeholder.com/500x500" alt="Current Account" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="text-xl font-bold mb-4"> All {title} will be available here to serve you better</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;