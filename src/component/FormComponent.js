import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const FormBox = styled.div`
  width: 412px;
  height: 512px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 세로 정렬을 위한 설정 */
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; /* 각 input 요소 사이의 간격을 주기 위해 추가 */
`;

function FormComponent() {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().slice(0, 16),
    nickname: "",
    phone: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: new Date().toISOString().slice(0, 16),
      }));
    }, 1000); // 매 1초마다 현재 날짜와 시간으로 업데이트

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌 정리
  }, []);

  // handleChange 함수 정의
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/submit-form", formData);
      alert("Form submitted successfully");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  // 희망 가격을 위한 옵션 생성 함수
  const createPriceOptions = () => {
    let options = [];
    for (let i = 100000; i <= 1000000; i += 2500) {
      // 예시로 100,000까지 설정. 필요에 따라 조정 가능
      options.push(
        <option key={i} value={i}>
          {i.toLocaleString()} 원
        </option>
      );
    }
    return options;
  };

  // '희망 수량'과 '희망 가격'의 곱을 계산합니다.
  const totalPrice = formData.quantity * formData.price;

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>신청일시:</label>{" "}
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            readOnly // 이 속성을 추가하여 필드를 읽기 전용으로 만듭니다.
          />
        </InputWrapper>
        <InputWrapper>
          <label>닉네임:</label>{" "}
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label> 휴대폰 번호:</label>{" "}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label>희망 수량:</label>{" "}
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label>희망 가격:</label>{" "}
          <select name="price" value={formData.price} onChange={handleChange}>
            {createPriceOptions()}
          </select>
        </InputWrapper>
        {/* '희망 수량'과 '희망 가격'의 곱을 표시합니다. */}
        <p>Total Price: {totalPrice.toLocaleString()} 원</p>
        <button type="submit">Submit</button>
      </form>
    </FormBox>
  );
}

export default FormComponent;
