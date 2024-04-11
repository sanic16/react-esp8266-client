import React, { useState } from "react"
import './createForm.css'

const CreateForm = (
    {
      title,
      options,
      isLoading,
      onHandleSubmit,
      onHandleSelect
    }: {
      title: string,
      options?: { id: number, name: string }[],
      isLoading: boolean
      onHandleSubmit: (name: string) => void,
      onHandleSelect?: (id: number) => void
    }
) => {
  const [name, setName] = useState('')
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onHandleSubmit(name)
    setName('')
  }

  return (
    <div
      className="create__form-container"
    >
      <h3>
        { title }
      </h3>
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
                onChange={(e) => onHandleSelect && onHandleSelect(parseInt(e.target.value))}
              >
                {
                  options.map((option) => (
                    <option key={option.id} value={option.id}>
                      { option.name } - { option.id }
                    </option>
                  ))
                }
              </select>
            )
          }  
          <button
            className={`btn ${isLoading ? 'disabled' : ''}`}
            type="submit"
            disabled={isLoading}
          >
            { isLoading ? 'Creando...' : 'Crear'}
          </button>
      </form>
    </div>
  )
}

export default CreateForm