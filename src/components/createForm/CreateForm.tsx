import React, { useState } from "react"
import './createForm.css'

const CreateForm = (
    {
      title,
      inputPlaceholder,
      options,
      isLoading,
      onHandleSubmit,
      onHandleSelect,
      endpoint,
      onHandleEndpoint
    }: {
      title: string,
      inputPlaceholder: string,
      options?: { id: number, name: string }[],
      isLoading: boolean
      onHandleSubmit: (name: string) => void,
      onHandleSelect?: (id: number) => void,
      endpoint?: string,
      onHandleEndpoint?: (endpoint: string) => void
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
              placeholder={inputPlaceholder}
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
          {
            endpoint && (
              <input
                className="create__form-input"
                placeholder="Endpoint"
                type="text"
                value={endpoint}
                onChange={(e) => onHandleEndpoint && onHandleEndpoint(e.target.value)}
              />
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