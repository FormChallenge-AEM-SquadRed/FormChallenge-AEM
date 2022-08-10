import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {MapTo} from "@adobe/aem-react-editable-components";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    StyledBlock,
    StyledBirthday,
    StyledTitle,
    StyledBirthdayContainer,
    StyledInput,
    StyledInputLabel,
    StyledInputContainer,
    StyledSelect,
    StyledSelectContainer,
    StyledSelectLabel,
} from "./style";

const currentYear = new Date().getFullYear() - 1;
const years = Array.from({length: 121}, (_, i) => -i + currentYear);
const months = Array.from({length: 12}, (_, i) => i + 1);
const days = Array.from({length: 31}, (_, i) => i + 1);

const Birthday = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
        getValues,
    } = useForm();

    const watchFields = watch(["month", "day", "year"]);

    useEffect(() => {
        const dateOfBirthday = new Date(
            `${watchFields[2]}-${watchFields[0]}-${watchFields[1]}`,
        );
        const diff = Date.now() - dateOfBirthday.getTime();
        const year = new Date(diff).getUTCFullYear();
        const age = Math.abs(year - 1970);

        age && setValue("age", age);
    }, [watchFields]);

    return (
        <StyledBirthday>
            <StyledTitle>Birthday *</StyledTitle>
            <StyledBirthdayContainer>
                <StyledBlock>
                    <Select
                        width={"100%"}
                        {...{register: register("day")}}
                        label={"Day"}
                    >
                        {days.map((day, index) => (
                            <option key={index}>{day}</option>
                        ))}
                    </Select>
                    <Select
                        width={"100%"}
                        {...{register: register("month")}}
                        label={"Month"}
                    >
                        {months.map((month, index) => (
                            <option key={index}>{month}</option>
                        ))}
                    </Select>
                </StyledBlock>
                <StyledBlock>
                    <Select
                        width={"100%"}
                        {...{register: register("year")}}
                        label={"Year"}
                    >
                        {years.map((year, index) => (
                            <option key={index}>{year}</option>
                        ))}
                    </Select>
                    <Input
                        width={"100%"}
                        label={"Age"}
                        placeholder='18'
                        type='text'
                        {...{register: register("age")}}
                        readOnly
                    />
                </StyledBlock>
            </StyledBirthdayContainer>
        </StyledBirthday>
    );
};

export default MapTo("reactapp/components/birthday")(Birthday);

const Input = ({
    type,
    placeholder,
    className,
    inputdata,
    label,
    width,
    height,
    onChangeCapture,
    readOnly,
    register,
}) => {
    return (
        <StyledInputContainer style={{width: `${width}`}}>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledInput
                type={type}
                defaultValue={inputdata}
                editable={true}
                placeholder={placeholder}
                className={className}
                onChangeCapture={onChangeCapture}
                readOnly={readOnly}
                {...register}
            />
        </StyledInputContainer>
    );
};

const Select = ({width, label, children, register}) => {
    return (
        <StyledSelectContainer style={{width: `${width}`}}>
            <StyledSelectLabel>{label}</StyledSelectLabel>
            <StyledSelect {...register}>{children}</StyledSelect>
        </StyledSelectContainer>
    );
};
