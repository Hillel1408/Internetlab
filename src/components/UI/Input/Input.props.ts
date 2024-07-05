export interface InputProps {
    type: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    error: string;
    success: string;
}
