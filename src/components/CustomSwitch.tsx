import { useState } from "react";
import { Switch } from "react-native";
import { appDefaultStyle } from "../theme/appTheme";


interface Props {
    isOn?: boolean
    onValueChanged?: ( currentValue: boolean ) => void
    trackColorFalse?: string
    trackColorTrue?: string
    thumbColorFalse?: string
    thumbColorTrue?: string
}

export const CustomSwitch = ( {
    isOn,
    onValueChanged,
    trackColorFalse = '#D9D9DB',
    trackColorTrue = appDefaultStyle.primary,
    thumbColorFalse = '#f4f3f4',
    thumbColorTrue = 'white',
}: Props ) => {

    const [isEnabled, setIsEnabled] = useState(isOn ?? false);
    const toggleSwitch = (value: boolean) => {
        !!onValueChanged && onValueChanged(value);
        setIsEnabled(value);
    }

    return (
        <>
            <Switch
                trackColor={{false: trackColorFalse, true: trackColorTrue}}
                thumbColor={isEnabled ? thumbColorTrue : thumbColorFalse}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </>
    )
}
