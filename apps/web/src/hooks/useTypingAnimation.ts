import { useEffect, useState } from "react";

export enum TypePhase {
    Typing,
    Pausing,
    Deleting,
};

const TYPING_INTERVAL = 150;
const TYPING_PAUSE_MS = 1000;
const TYPING_DELETING_INTERVAL = 50;

export const useTypingAnimation = (typingTexts: string[]): {
    typingText: string,
    selectedTypingText: string,
    phase: TypePhase
} => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [phase, setPhase] = useState<TypePhase>(TypePhase.Typing)
    const [typingText, setTypingText] = useState<string>('');
    useEffect(() => {
        switch (phase) {
            case TypePhase.Typing: {
                const nextTypingText = typingTexts[selectedIndex].slice(0, typingText.length + 1);

                if (nextTypingText === typingText) {
                    setPhase(TypePhase.Pausing)
                    return
                }

                const timeout = setTimeout(() => {
                    setTypingText(nextTypingText);
                }, TYPING_INTERVAL);

                return () => clearTimeout(timeout);
            }

            case TypePhase.Deleting: {

                if (!typingText) {
                    const nextIdex = selectedIndex + 1
                    setSelectedIndex(typingTexts[nextIdex] ? nextIdex : 0);
                    setPhase(TypePhase.Typing)
                    return
                }
                const nextRemainingText = typingTexts[selectedIndex].slice(0, typingText.length - 1);

                const timeout = setTimeout(() => {
                    setTypingText(nextRemainingText);
                }, TYPING_DELETING_INTERVAL);

                return () => clearTimeout(timeout);
            }
            case TypePhase.Pausing:
            default: {
                const timeout = setTimeout(() => {
                    setPhase(TypePhase.Deleting);
                }, TYPING_PAUSE_MS);

                return () => clearTimeout(timeout);
            }
        }

    }, [typingTexts, typingText, selectedIndex, phase]);

    return { typingText, phase, selectedTypingText: typingTexts[selectedIndex] }
}


// import { xclassnames } from '@/lib/xclassnames';
// import { TypePhase, useTypingAnimation } from '@/hooks/useTypingAnimation';

// const typingTexts = ['Intelligent systems', 'advanced machines', 'are technologically'];

// const { typingText, selectedTypingText, phase } = useTypingAnimation(typingTexts);

{/* <h1 
    aria-label={selectedTypingText} 
    className={xclassnames(
        phase !== TypePhase.Deleting && "end-cursor",  
        `relative max-w-xl text-center 
        ${phase === TypePhase.Pausing && "blinking-cursor"}`
    )}>
    Icloudeng {typingText}
</h1> */}