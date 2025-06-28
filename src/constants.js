// константы пишутся все с большой буквы
// INPUTS

const REGEXES = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
  phone: /[^\d+]/g,
  text: /[^a-zA-Zа-яА-ЯёЁ\s-]/g
}

const inputs = [
  {
    key: "name",
    name: "name",
    type: "text",
    placeholder: "Name"
  },
  {
    key: "phone",
    name: "phone",
    type: "tel",
    placeholder: "Phone"
  },
  {
    key: "email",
    name: "email",
    type: "email",
    placeholder: "Email"
  }
]
const selectOptions = [
  {
    position: "admin",
    label: "Admin",
    value: "Admin"
  },
  {
    position: "developer",
    label: "Developer",
    value: "Developer"
  },
  {
    position: "devops",
    label: "DevOps",
    value: "DevOps"
  },
  {
    position: "qa",
    label: "QA",
    value: "QA"
  }
]

export { inputs, selectOptions, REGEXES }
