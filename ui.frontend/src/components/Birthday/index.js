import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  StyledBlock,
  StyledBirthday,
  StyledTitle,
  StyledBirthdayContainer,
  Option,
} from "./style";
import Input from "./input";
import Select from "./select";

const currentYear = new Date().getFullYear() - 1;
const years = Array.from({ length: 121 }, (_, i) => -i + currentYear);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const Birthday = ({
  labeltitle,
  labelday,
  labelmonth,
  labelyear,
  labelage,
  colortitle,
  fonts,
  colorinput,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const watchFields = watch(["month", "day", "year"]);

  useEffect(() => {
    const dateOfBirthday = new Date(
      `${watchFields[2]}-${watchFields[0]}-${watchFields[1]}`
    );
    const diff = Date.now() - dateOfBirthday.getTime();
    const year = new Date(diff).getUTCFullYear();
    const age = Math.abs(year - 1970);

    age && setValue("age", age);
  }, [watchFields]);

  return (
    <StyledBirthday>
      <StyledTitle fonts={fonts} colortitle={colortitle}>
        {labeltitle}
      </StyledTitle>
      <StyledBirthdayContainer>
        <StyledBlock>
          <Select
            {...{ register: register("day") }}
            fonts={fonts}
            labelday={labelday}
            colortitle={colortitle}
            colorinput={colorinput}
          >
            {days.map((day, index) => (
              <Option colorinput={colorinput} key={index}>
                {day}
              </Option>
            ))}
          </Select>
          <Select
            {...{ register: register("month") }}
            fonts={fonts}
            labelmonth={labelmonth}
            colortitle={colortitle}
            colorinput={colorinput}
          >
            {months.map((month, index) => (
              <Option colorinput={colorinput} key={index}>
                {month}
              </Option>
            ))}
          </Select>
        </StyledBlock>
        <StyledBlock>
          <Select
            {...{ register: register("year") }}
            fonts={fonts}
            labelyear={labelyear}
            colortitle={colortitle}
            colorinput={colorinput}
          >
            {years.map((year, index) => (
              <Option colorinput={colorinput} key={index}>
                {year}
              </Option>
            ))}
          </Select>
          <Input
            colortitle={colortitle}
            labelage={labelage}
            type='text'
            fonts={fonts}
            colorinput={colorinput}
            {...{ register: register("age") }}
          />
        </StyledBlock>
      </StyledBirthdayContainer>
    </StyledBirthday>
  );
};

export default Birthday;
