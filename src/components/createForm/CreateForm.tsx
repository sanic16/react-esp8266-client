import { useState } from "react"

const CreateForm = (
    {
      options,
      isLoading,
      onHandleSubmit
    }: {
      options?: { id: number, name: string }[],
      isLoading: boolean
      onHandleSubmit: (name: string) => void
    }
) => {
  const [name, setName] = useState('')
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onHandleSubmit(name)
  }

  return (
    <form
      className="create__form"
      onSubmit={onSubmit}
    >
        <input
            className="create__form-input"
            type="text"
            value={name}
            onChange={onChangeName}
        />
        {
          options && (
            <select
              className="create__form-select"
            >
              {
                options.map(option => (
                  <option key={option.id} value={option.id}>
                    { option.name }
                  </option>
                ))
              }
            </select>
          )
        }  
        <button
          className="btn"
          type="submit"
        >
          { isLoading ? 'Creando...' : 'Crear'}
        </button>
    </form>
  )
}

export default CreateForm