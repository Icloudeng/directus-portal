export function CleanHero({
  title,
  description,
  noBottomSpace = false,
}: {
  title: string;
  description?: string;
  noBottomSpace?: boolean;
}) {
  return (
    <div
      className={`flex max-h-[1000px] bg-[#f5f7fa] ${
        !noBottomSpace ? 'min-h-[350px]' : 'pt-[175px] pb-2'
      } -mt-1`}
    >
      <div className='xl:max-w-[560px] lg:max-w-[480px] justify-center max-w-[460px] flex items-center flex-col mx-auto'>
        <h1 className='text-center text-[30px] sm:text-[45px] font-bold'>
          {title}
        </h1>
        {description && (
          <div className='mt-[30px]'>
            <p className='text-center text-[18px] ss:text-[20px] font-light leading-[1.64]'>
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
