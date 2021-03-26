import React, {
    useCallback,
    useMemo,
    useState,
    useEffect
} from 'react';

import {
    BorderHandlerStyle
  } from '../model/borderStyle.model';

import {
    InputContainer,
    InputsContainer,
    Input,
    InputLabel,
    LinkButtonContainer,
    LinkAllBorderRadiusButton,
    FullBorderInput,
    FullBorderInputContainer
} from './style';

export const InputGrid: React.FC = () => {
    const [borderTopLeft, setBorderTopLeft] = useState<number>(8);
    const [borderTopRight, setBorderTopRight] = useState<number>(8);
    const [borderBottomRight, setBorderBottomRight] = useState<number>(8);
    const [borderBottomLeft, setBorderBottomLeft] = useState<number>(8);
    
    const borderStyleModel = useMemo(() => {
        const container = document.querySelector("#border-radius-preview") as HTMLDivElement;
        
        if (container) {
          const containerHandlerClass = new BorderHandlerStyle(container);
          return containerHandlerClass;
        }
    }, []);

    const setBorderRadius = useCallback((property: string, numberOfPixel: number) => {
        const pixels = `${numberOfPixel}px`;
        if (borderStyleModel) {
            borderStyleModel.setBorderRadius(property, pixels); 
        }
    }, [borderStyleModel]);

    const submitChanges = useCallback((e: KeyboardEvent) => {
        if (e.key === "Enter") {
            console.log("DALE");
            setBorderRadius("borderTopRightRadius", borderTopRight);
            setBorderRadius("borderTopLeftRadius", borderTopLeft);
            setBorderRadius("borderBottomRightRadius", borderBottomRight);
            setBorderRadius("borderBottomLeftRadius", borderBottomLeft);
        }
    }, [borderTopRight, setBorderRadius, borderTopLeft, borderBottomRight, borderBottomLeft]);

    useEffect(() => {
        document.addEventListener('keydown', submitChanges);

        return () => {
            document.removeEventListener('keydown', submitChanges)
        }
    });

    return (
    <InputsContainer>
        <InputContainer
            className="topRight"
        >
            <InputLabel>
                Top Left Radius
            </InputLabel>
            <Input
                type="number"
                value={borderTopLeft}
                onChange={(newValue) => setBorderTopLeft(parseInt(newValue.target.value))}
            />
        </InputContainer>

        <InputContainer
            className="topLeft"
        >
            <InputLabel>
                Top Right Radius
            </InputLabel>
            <Input
                type="number"
                value={borderTopRight}
                onChange={(newValue) => setBorderTopRight(parseInt(newValue.target.value))}
            />
        </InputContainer>

        <LinkButtonContainer
            className='button'
        >
            <LinkAllBorderRadiusButton
            >
            Link
            </LinkAllBorderRadiusButton>
        </LinkButtonContainer>


        <InputContainer
            className="bottomRight"
        >
            <InputLabel>
                Bottom Left Radius
            </InputLabel>
            <Input 
                type="number"
                value={borderBottomLeft}
                onChange={(newValue) => setBorderBottomLeft(parseInt(newValue.target.value))}
            />
        </InputContainer>
        
        <InputContainer
        className="bottomLeft"
        >
            <InputLabel>
                Bottom Right Radius
            </InputLabel>
            <Input 
                type="number"
                value={borderBottomRight}
                onChange={(newValue) => setBorderBottomRight(parseInt(newValue.target.value))}
            />
        </InputContainer>
        <FullBorderInputContainer
            className='full-border'
        >
            <InputLabel>Full border</InputLabel>
            <FullBorderInput />
        </FullBorderInputContainer>
    </InputsContainer>
    );
}