import { CategoryCard } from "./components/CategoryCard"
import { CategoryItem } from "./components/CategoryItem"
import { InputWithIcon } from "./components/InputWithIcon"

export const PlatformCategory = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='w-full flex flex-col items-center justify-center gap-7 mb-7'>
        <h1 className='text-center'>Find a Solution</h1>
        <div className='max-w-xl  w-full text-center'>
          <InputWithIcon
            label="Search"
            icon={<svg aria-hidden="true" className="absolute inset-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>}
            btnText="search"
            withButton
          />
        </div>
        <div className="w-full flex items-start gap-5 p-7">
          <div className="flex-1">
            <h4 className="mb-5">Solution categories</h4>
            <ul className="flex flex-col items-start justify-start gap-1">
              <CategoryItem
                text="Kubernetes"
                itemsNumber={12}
                icon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"></path></svg>
                }
              />
              <CategoryItem
                text="Database"
                itemsNumber={9}
                icon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path></svg>}
              />

              <CategoryItem
                text="eCommerce"
                itemsNumber={17}
                icon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg>}
              />
              <CategoryItem
                text="Frameworks"
                itemsNumber={33}
                icon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M.932 6.242v2.535h5.652L0 17.757h10.219v-2.534h-5.18l6.553-8.98H.932zm13.537.162c-3.178 0-3.178 3.178-3.178 3.178h9.531C24 9.582 24 6.404 24 6.404h-9.531zm-.006 4.067c-3.173 0-3.172 3.172-3.172 3.172l4.762.005c3.178 0 3.177-3.177 3.177-3.177h-4.767zm0 4.049c-3.173 0-3.172 3.183-3.172 3.183l1.584-.006c3.178 0 3.178-3.177 3.178-3.177h-1.59Z"></path></svg>}
              />
              <CategoryItem
                text="eLearning"
                itemsNumber={21}
                icon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M13.01.083c-1.354-.024-2.678.303-3.822 1.12-3.493 2.178-4.327 6.98-2.163 10.94.442-4.8 3.936-8.762 8.56-9.603 2.165-.248 3.74 0 3.74 0C17.601 1.15 15.264.125 13.01.083zm-5.246.923C4.418 2.095.924 5.163 1.367 8.628c0 3.96 3.935 7.03 7.821 8.317-3.05-3.515-5.214-7.87-3.295-12.672.887-2.03 1.87-3.267 1.87-3.267zM17.79 3.262c-2.789-.035-6.718 1.358-8.158 4.031 4.38-1.733 9.99-1.336 12.646 3.367 1.133 1.93 1.575 3.464 1.575 3.464.542-3.762-.345-8.563-3.788-10.346-.542-.334-1.345-.504-2.275-.516zm-2.497 3.635c3.493 3.514 5.657 9.208 2.656 13.613-1.328 1.931-2.51 3.069-2.51 3.069h.002c3.788-.94 7.673-4.454 7.673-8.365 0-2.623-2.704-7.327-7.82-8.317zM.531 9.57c-1.328 3.465-.05 7.82 2.558 9.603 3.493 2.624 8.267 1.336 11.76-1.733-4.773.892-9.989 0-12.644-4.306C1.024 11.104.53 9.57.53 9.57zm17.712 3.168c-1.723 4.8-5.609 8.168-10.627 8.416-2.312-.149-3.936-.644-3.936-.644 2.41 2.97 6.789 4.208 10.282 2.872 2.362-.94 4.133-3.516 4.526-6.437.246-1.485-.048-2.723-.245-4.207Z"></path></svg>}
              />
            </ul>
          </div>

          <div className="flex-[2] grid grid-cols-2 gap-5">
            <CategoryCard
              title="Noteworthy technology acquisitions 2021"
              text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              cardLink="#"
              color="green"
              imgLink="https://flowbite.com/docs/images/blog/image-1.jpg"
            />
            <CategoryCard
              title="Noteworthy technology acquisitions 2021"
              text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              cardLink="#"
              color="green"
              imgLink="https://flowbite.com/docs/images/blog/image-2.jpg"
            />
            <CategoryCard
              cardWidth="col-span-2"
              title="Noteworthy technology acquisitions 2021"
              text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              cardLink="#"
              color="green"
              imgLink="https://flowbite.com/docs/images/blog/image-3.jpg"
            />
            <CategoryCard
              title="Noteworthy technology acquisitions 2021"
              text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              cardLink="#"
              color="green"
              imgLink="https://flowbite.com/docs/images/blog/image-4.jpg"
            />
            <CategoryCard
              title="Noteworthy technology acquisitions 2021"
              text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              cardLink="#"
              color="green"
              imgLink="https://flowbite.com/docs/images/blog/image-2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
