import {useEffect} from "react";
import {useForm} from "react-hook-form";
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

const Birthday = ({labeltitle, labelday, labelmonth, labelyear, labelage}) => {
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
            <StyledTitle>{labeltitle} *</StyledTitle>
            <StyledBirthdayContainer>
                <StyledBlock>
                    <Select {...{register: register("day")}} label={labelday}>
                        {days.map((day, index) => (
                            <option key={index}>{day}</option>
                        ))}
                    </Select>
                    <Select
                        {...{register: register("month")}}
                        label={labelmonth}
                    >
                        {months.map((month, index) => (
                            <option key={index}>{month}</option>
                        ))}
                    </Select>
                </StyledBlock>
                <StyledBlock>
                    <Select {...{register: register("year")}} label={labelyear}>
                        {years.map((year, index) => (
                            <option key={index}>{year}</option>
                        ))}
                    </Select>
                    <Input
                        label={labelage}
                        type='text'
                        {...{register: register("age")}}
                    />
                </StyledBlock>
            </StyledBirthdayContainer>
        </StyledBirthday>
    );
};

export default Birthday;

const Input = ({label, register}) => {
    return (
        <StyledInputContainer>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledInput {...register} readOnly />
        </StyledInputContainer>
    );
};

const Select = ({label, children, register}) => {
    return (
        <StyledSelectContainer>
            <StyledSelectLabel>{label}</StyledSelectLabel>
            <StyledSelect {...register}>{children}</StyledSelect>
        </StyledSelectContainer>
    );
};
