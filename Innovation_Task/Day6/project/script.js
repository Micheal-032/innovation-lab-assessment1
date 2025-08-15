let contacts = [
    {
      name: "antony das",
      phone: "1234567890",
      email: "antony@example.com",
      displayInfo: function () {
        const { name, phone, email } = this;
        return `${name} - ${phone} - ${email}`;
      }
    },
    {
      name: "vikram",
      phone: "9876543210",
      email: "vikram@example.com",
      displayInfo: function () {
        const { name, phone, email } = this;
        return `${name} - ${phone} - ${email}`;
      }
    }
  ];
  
  function displayAllContacts() {
    const output = document.getElementById("output");
    output.innerHTML = "";
    contacts.forEach(contact => {
      output.innerHTML += contact.displayInfo() + "<br>";
    });
  }
  
  function addMultipleContacts(...newContacts) {
    contacts.push(...newContacts);
  }
  
  const moreContacts = [
    { name: "Coolie", phone: "5551112222", email: "coolie@example.com", displayInfo: contacts[0].displayInfo },
    { name: "simon", phone: "4443332222", email: "simon@example.com", displayInfo: contacts[0].displayInfo }
  ];
  
  addMultipleContacts(...moreContacts);
  
  const otherContacts = [
    { name: "Dahaa", phone: "1112223333", email: "dahaa@example.com", displayInfo: contacts[0].displayInfo }
  ];
  
  contacts = [...contacts, ...otherContacts];
  
  const personA = { name: "David King", phone: "9998887777", email: "david@example.com", displayInfo: contacts[0].displayInfo };
  const personB = { name: "Eva Queen", phone: "8887776666", email: "eva@example.com" };
  
  contacts[0].displayInfo.call(personB);
  contacts[0].displayInfo.apply(personB);
  const boundDisplay = contacts[0].displayInfo.bind(personB);
  
  displayAllContacts();
  