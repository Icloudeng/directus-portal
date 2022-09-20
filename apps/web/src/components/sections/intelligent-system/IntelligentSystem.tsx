import { xclassnames } from '@/lib/xclassnames';
import { TypePhase, useTypingAnimation } from '@/hooks/useTypingAnimation';

const typingTexts = ['Intelligent systems', 'advanced machines', 'are technologically'];

export const IntelligentSystem = () => {
    const {typingText, selectedTypingText, phase} = useTypingAnimation(typingTexts);
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>What is Intelligent System</h1>
                <span className='max-w-xl text-center'>
                Intelligent systems are technologically advanced machines that perceive 
                and respond to the world around them.
                </span>
                {/* <h1 
                    aria-label={selectedTypingText} 
                    className={xclassnames(
                        phase !== TypePhase.Deleting && "end-cursor",  
                        `relative max-w-xl text-center 
                        ${phase === TypePhase.Pausing && "blinking-cursor"}`
                    )}>
                    Icloudeng {typingText}
                </h1> */}
            </div>
        </div>
    )
}
