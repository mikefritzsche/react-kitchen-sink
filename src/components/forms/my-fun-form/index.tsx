import { useForm, SubmitHandler } from "react-hook-form"
import {useState} from "react";

export default function MyFunForm() {
  const [values, setValues] = useState({})
  const onInput = (e: unknown) => {
    console.log('onInput: ', [e.target.name, e.target.value])
    setValues({...values, [e.target.name]: e.target.value})
  }
  type Inputs = {
    name: string
    age: number
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div style={{ display: 'flex', flex: '0 0 100%', flexDirection: 'column'}}>
      {/*<h1>My Fun Form</h1>*/}
      <div style={{display: 'flex'}}>
        <div style={{ flex: 1 }}>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
        <div style={{ flex: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', gap: 8 }}>
            <label style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
              <span>Name:</span>
              <input
                {...register("name", { required: true })}
                style={{ padding: 10, borderRadius: 5, borderStyle: 'none' }}
                onInput={onInput}
                type="text"
                name="name"
              />
            </label>
            {errors.name && <span>This field is required</span>}
            <label style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
              <span>Age:</span>
              <input
                {...register("age", { required: true })}
                style={{ padding: 10, borderRadius: 5, borderStyle: 'none' }}
                onInput={onInput} type="number"
                name="age"
              />
            </label>
            {errors.age && <span>This field is required</span>}
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

