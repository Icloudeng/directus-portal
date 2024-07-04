import { ST_Popup, STemplates_Props } from '@apps/contracts';

import { useMut } from '@/cms/mut';

export function ST_PopupFC({ 
    items,
 }: STemplates_Props<ST_Popup>) {

    return <section className="text-gray-600 body-font"> 
                <div id='root' >
                    
                        {items.map((item) => (
                            <STpopup key={item.item.id} item={item} /> 
                        ))}
                   
                </div>
            </section> ;
} 

function STpopup(props: {item: ST_Popup}){
    const item = useMut(props.item.item);
    
    const modal_overlay: HTMLElement | null = document.querySelector('#modal_overlay');
    const modal: HTMLElement | null = document.querySelector('#modal');

    function openModal(value: boolean): void {
        const modalCl: DOMTokenList | undefined = modal?.classList;
        const overlayCl: DOMTokenList | undefined = modal_overlay?.classList;

        if (value) {
            overlayCl?.remove('hidden');
            setTimeout(() => {
                modalCl?.remove('opacity-0');
                modalCl?.remove('-translate-y-full');
                modalCl?.remove('scale-150');
            }, 100);
        } else {
            modalCl?.add('-translate-y-full');
            setTimeout(() => {
                modalCl?.add('opacity-0');
                modalCl?.add('scale-150');
            }, 100);
            setTimeout(() => overlayCl?.add('hidden'), 300);
        }
    }

    openModal(true);

    
    return <div>
                <div className="p-3">
                    <button onClick={openModal(true)}  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">
                        {item.translations?.button_text}
                    </button>
                </div>
                <div id="modal_overlay" className="hidden absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0" >
                    <div id="modal" className="pacity-0 transform -translate-y-full scale-150  relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300">
                    <button onClick={openModal(false)} className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white">
                        ✗
                    </button>
                    <div className="px-4 py-3 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-600">{item.translations?.title}</h2>
                    </div>
                    <div className="w-full p-3">
                            {item.translations?.description}
                    </div>
                    <div className="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3"></div>
                    </div>
                </div>
            </div>
                          
}


