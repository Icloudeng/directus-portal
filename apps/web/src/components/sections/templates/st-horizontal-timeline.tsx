import { ST_HorizontalTimeline, STemplates_Props } from '@apps/contracts';

import { useMut } from '@/cms/mut';

export function ST_HorizontalTimelineFC({ 
    items,
 }: STemplates_Props<ST_HorizontalTimeline>) {

    return <section className="text-gray-600 body-font"> 
                <div className="border-l-2 mt-10">
                    
                        {items.map((item) => (
                            <STHorizontalTimeline key={item.item.id} item={item} /> 
                        ))}
                    
                </div>
            </section> ;
} 

function STHorizontalTimeline(props: {item: ST_HorizontalTimeline}){
    const item = useMut(props.item.item);
    return <div style={{ background :item.color }} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
         
                <div style={{ background :item.color }} className="w-5 h-5  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div style={{ background :item.color }} className="w-10 h-1  absolute -left-10 z-0"></div>

                <div className="flex-auto">
                <h1 className="text-lg">{item.translations?.small_title}</h1>
                <h1 className="text-xl font-bold">{item.translations?.title}</h1>
                <p>{item.translations?.description}</p>
                </div>
                <a href="{item.link}" className="text-center border bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  text-white hover:text-gray-300">{item.translations?.link_text}</a>
            </div>
                

            
}

        