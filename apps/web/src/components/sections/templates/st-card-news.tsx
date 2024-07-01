import { ST_CardNews, STemplates_Props } from '@apps/contracts';

import { useMut } from '@/cms/mut';

export function ST_CardNewsFC({ 
    items,
 }: STemplates_Props<ST_CardNews>) {

    return <section className="text-gray-600 body-font"> 
                    <div className="wrap_timeline">
                        {items.map((item) => (
                            <STCardNews key={item.item.id} item={item} /> 
                        ))}
                    </div> 
            </section> ;
} 

function STCardNews(props: {item: ST_CardNews}){
    const item = useMut(props.item.item);
    return  <div className="box_timeline">
            <div className="box-top_timeline">
              <img
                className="box-image_timeline"
                src="https://www.dev.smatflow.org/media/original_images/conference_1_2.png"
                alt=""
              />
              <div className="title-flex_timeline">
                <h3 className="box-title_timeline">
                  {item.translations?.title}
                </h3>
              </div>
              <p className="description_timeline">
              {item.translations?.desc}
              </p>
            </div>
            <a href="" className="button_timeline a_timeline">
            {item.translations?.text_link}
            </a>
          </div>         
}