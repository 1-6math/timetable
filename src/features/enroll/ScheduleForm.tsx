import { useForm, useFieldArray } from 'react-hook-form';
import styled from 'styled-components';

interface ClassForm {
  day: string;
  startTime: string;
  duration: number;
  distance: number;
}

interface FormData {
  name: string;
  classes: ClassForm[];
}

const ScheduleForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      classes: [{ day: '', startTime: '', duration: 0, distance: 0 }],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'classes',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>이름:</th>
              <td colSpan={4}>
                <Input
                  {...register('name', { required: true })}
                  placeholder="이름을 입력하세요"
                />
                {errors.name && <Error>이름은 필수 입력 항목입니다</Error>}
              </td>
            </tr>
            <tr>
              <th>요일</th>
              <th>시작 시간</th>
              <th>수업 시간 (분)</th>
              <th>거리 (분)</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <Select
                    {...register(`classes.${index}.day`, { required: true })}
                  >
                    <option value="">요일 선택</option>
                    <option value="월">월</option>
                    <option value="화">화</option>
                    <option value="수">수</option>
                    <option value="목">목</option>
                    <option value="금">금</option>
                    <option value="토">토</option>
                    <option value="일">일</option>
                  </Select>
                  {errors.classes?.[index]?.day && (
                    <Error>요일은 필수 입력 항목입니다</Error>
                  )}
                </td>
                <td>
                  <Input
                    type="time"
                    {...register(`classes.${index}.startTime`, {
                      required: true,
                    })}
                  />
                  {errors.classes?.[index]?.startTime && (
                    <Error>시작 시간은 필수 입력 항목입니다</Error>
                  )}
                </td>
                <td>
                  <Input
                    type="number"
                    {...register(`classes.${index}.duration`, {
                      required: true,
                      valueAsNumber: true,
                    })}
                    placeholder="수업 시간 (분)"
                  />
                  {errors.classes?.[index]?.duration && (
                    <Error>수업 시간은 필수 입력 항목입니다</Error>
                  )}
                </td>
                <td>
                  <Input
                    type="number"
                    {...register(`classes.${index}.distance`, {
                      required: true,
                      valueAsNumber: true,
                    })}
                    placeholder="거리 (분)"
                  />
                  {errors.classes?.[index]?.distance && (
                    <Error>거리는 필수 입력 항목입니다</Error>
                  )}
                </td>
                <td>
                  <RemoveButton type="button" onClick={() => remove(index)}>
                    삭제
                  </RemoveButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <AddButton
        type="button"
        onClick={() =>
          append({ day: '', startTime: '', duration: 0, distance: 0 })
        }
      >
        수업 추가
      </AddButton>

      <SubmitButton type="submit">제출</SubmitButton>
    </Form>
  );
};

export default ScheduleForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const TableContainer = styled.div`
  overflow-x: auto; /* 테이블이 넘치지 않도록 */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  table-layout: fixed; /* 테이블 레이아웃 고정 */

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    vertical-align: middle; /* 텍스트 수직 정렬 */
    min-width: 120px;
    max-width: 200px;
  }

  th {
    background-color: #f5f5f5;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: none; /* 테두리 제거 */
  text-align: center; /* 가운데 정렬 */
  width: 100%; /* 인풋이 셀을 넘지 않도록 */
  background-color: #f9f9f9; /* 약간의 배경 색 추가 */
  border-radius: 4px; /* 테두리 둥글게 */
  box-sizing: border-box; /* 패딩과 함께 박스 사이즈 계산 */
`;

const Select = styled.select`
  padding: 8px;
  border: none; /* 테두리 제거 */
  text-align: center; /* 가운데 정렬 */
  width: 100%; /* 인풋이 셀을 넘지 않도록 */
  background-color: #f9f9f9; /* 약간의 배경 색 추가 */
  border-radius: 4px; /* 테두리 둥글게 */
  box-sizing: border-box; /* 패딩과 함께 박스 사이즈 계산 */
`;

const AddButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const RemoveButton = styled(AddButton)`
  background-color: #dc3545;
`;

const SubmitButton = styled(AddButton)`
  margin-top: 8px;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;
