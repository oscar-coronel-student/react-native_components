import { useState } from "react";

interface UseForm<T> {
    formState: T 
    handleChange: (field: keyof T, value: string|boolean) => void
    handleReset: () => void
}

export const useForm = function<T extends Object>( initFormData: T ): UseForm<T> {

    const [formState, setFormState] = useState(initFormData)

    const handleChange = (field: keyof T, value: string|boolean): void => {
        setFormState( 
            {
                ...formState,
                [field]: value
            }
        )
    }

    const handleReset = () => {
        setFormState(initFormData);
    }

    return {
        formState,
        handleChange,
        handleReset
    }
}