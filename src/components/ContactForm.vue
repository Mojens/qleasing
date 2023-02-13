<template>
  <!--
    <form>
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" class="form-control" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" id="phone" class="form-control" v-model="form.phone" />
      </div>
      <div class="form-group">
        <label for="note" class="form-label">Note</label>
        <textarea id="note" class="form-control" v-model="form.note"></textarea>
      </div>
      <button class="btn btn-submit" @click.prevent="submitForm">Submit</button>
    </form>
    -->
  <div class="multi__section grid--auto-2">
    <form class="vue-form" @submit.prevent="submit">
      <div class="error-message">
        <p v-show="!email.valid">Oh, venligst skriv en gyldig email</p>
      </div>

      <fieldset>
        <h1 class="h--2">Quickleasing Kontakt Form</h1>
        <div class="grid--auto-3 gap--s">
          <div>
            <label class="label" for="name">Navn*</label>
            <input type="text"
                   name="name"
                   id="name"
                   required
                   placeholder="John Petersen"
                   v-model="name" />
          </div>
          <div>
            <label class="label" for="phone">Telefon</label>
            <input
              type="text"
              name="phone"
              id="phone"
              v-model="phone"
              placeholder="2866854"
            />
          </div>
        </div>
        <div class="grid--auto-3 gap--s">
          <div>
            <label class="label" for="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@hotmail.com"
              required
              :class="{ email, error: !email.valid }"
              v-model="email.value"
            />
          </div>
          <div>
            <label class="label">Henvendelse årsag*</label>
            <p class="select">
              <select class="budget" v-model="inquiry_reason.member" >
                <option value="onsker_kontakt" selected>
                  Ønsker du kontakt med..
                </option>
                <option value="værksted">Værksted</option>
                <option value="leasingkonsulenter">Leasingkonsulenter</option>
                <option value="ind/udleveringen_af_biler">
                  Ind/udleveringen af biler
                </option>
                <option value="bogholderi">
                  Bogholderi, PBS, km-afregninger m.m.
                </option>
              </select>
            </p>
          </div>
        </div>
        <div v-if="inquiry_reason.member === 'værksted'">
          <label class="label" for="regNumber">Nummerplade</label>
          <input
            type="text"
            name="regNumber"
            id="regNumber"
            maxlength="7"
            placeholder="DS77323"
            v-model="regNumber"
            @input="regNumber = $event.target.value.toUpperCase()"
            :required="inquiry_reason.member === 'værksted'"
          />
        </div>

        <div v-if="inquiry_reason.member === 'leasingkonsulenter'">
          <label class="label">Ønske?</label>

          <ul class="vue-form-list">
            <li>
              <input
                type="radio"
                name="radio-1"
                id="radio-1"
                value="lease_bil"
                v-model="inquiry_reason.framework"
              />
              <label for="radio-1">Lease en bil hos os</label>
            </li>
            <li>
              <input
                type="radio"
                name="radio-2"
                id="radio-2"
                value="forlaenge_leasingaftale"
                v-model="inquiry_reason.framework"
              />
              <label for="radio-2">Forlænge din nuværende leasingaftale</label>
            </li>
          </ul>
        </div>
        <div v-if="inquiry_reason.framework === 'lease_bil' && inquiry_reason.member === 'leasingkonsulenter'">
          <label class="label" for="lease_bil_input">Alder</label>
          <input
            type="text"
            name="age"
            id="age"
            v-model="age"
            placeholder="34"
            :required="inquiry_reason.member === 'leasingkonsulenter'"
            maxlength="3"
          />
        </div>

        <div v-if="inquiry_reason.framework === 'forlaenge_leasingaftale' && inquiry_reason.member === 'leasingkonsulenter'">
          <label class="label" for="regNumberTwo"
            >Nummerplade</label
          >
          <input
            type="text"
            name="regNumberTwo"
            id="regNumberTwo"
            maxlength="7"
            placeholder="DS77323"
            v-model="regNumberTwo"
            @input="
              regNumberTwo = $event.target.value.toUpperCase()
            "
            :required="inquiry_reason.member === 'leasingkonsulenter'"
          />
        </div>

        <div>
          <label class="label" for="textarea">Bemærkning</label>
          <textarea
            class="message"
            name="textarea"
            id="textarea"
            required=""
            v-model="note.text"
            :maxlength="note.maxlength"
            placeholder="Hej, jeg har et spørgsmål angående..."
          ></textarea>
          <span class="counter"
            >{{ note.text.length }} / {{ note.maxlength }}</span
          >
        </div>
        <div>
          <input
            class="button-primary center--left"
            type="submit"
            value="Send henvendelse"

          />
        </div>
      </fieldset>
    </form>
    <div class="debug">
      <div class="contacts___2bySS inverted___2kcPN" data-v-81fdc7f5="">
        <div class="questions-block___xFoBu" data-v-81fdc7f5="">
          <h2 class="pad-header--s" data-v-81fdc7f5="">
            Fik du ikke svaret på det du søgte efter?
          </h2>
          <div
            class="markdown___35KUH questions___1ebNf center--all"
            data-v-81fdc7f5=""
          >
            <p class="center--all text--l">Måske findes svaret på vores</p>
            <RouterLink style="color: black" to="/faq"
              ><button class="button-primary">FAQ side</button></RouterLink
            >
            <p data-v-81fdc7f5="">Hvis ikke, så kontakt os endelig.</p>
            <p data-v-81fdc7f5="">Mandag til Torsdag - 09.00-16.00</p>
            <p data-v-81fdc7f5="">Fredag - 09.00-15.30</p>
            <p data-v-81fdc7f5="">Weekend - Lukket</p>
            <p data-v-81fdc7f5="">Vi sidder klar til at hjælpe dig.</p>
          </div>
        </div>
        <div class="contacts-block___1uL7D" data-v-81fdc7f5="">
          <a
            class="contact-link___LYngd"
            href="mailto:support@quickleasing.dk"
            target="_self"
            title="support@quickleasing.dk"
            data-v-81fdc7f5=""
            ><svg
              class="icon___2lyj4"
              fill="none"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              data-v-81fdc7f5=""
            >
              <path
                d="M3.23047 7.11719L24.0005 25.9992L44.7705 7.11719"
                stroke-miterlimit="10"
                stroke-width="2"
                data-v-81fdc7f5=""
              ></path>
              <path
                d="M42 6H6C3.79086 6 2 7.79086 2 10V38C2 40.2091 3.79086 42 6 42H42C44.2091 42 46 40.2091 46 38V10C46 7.79086 44.2091 6 42 6Z"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
                data-v-81fdc7f5=""
              ></path>
            </svg>
            <div class="title___1Cs5_" data-v-81fdc7f5="">
              support@quickleasing.dk
            </div></a
          ><a
            class="contact-link___LYngd"
            href="tel:8988 5080"
            target="_blank"
            title="89 88 50 80"
            data-v-81fdc7f5=""
            ><svg
              class="icon___2lyj4"
              fill="none"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              data-v-81fdc7f5=""
            >
              <path
                d="M24 40C25.6569 40 27 38.6569 27 37C27 35.3431 25.6569 34 24 34C22.3431 34 21 35.3431 21 37C21 38.6569 22.3431 40 24 40Z"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
                data-v-81fdc7f5=""
              ></path>
              <path
                d="M36 46H12C10.9391 46 9.92172 45.5786 9.17157 44.8284C8.42143 44.0783 8 43.0609 8 42V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2H36C37.0609 2 38.0783 2.42143 38.8284 3.17157C39.5786 3.92172 40 4.93913 40 6V42C40 43.0609 39.5786 44.0783 38.8284 44.8284C38.0783 45.5786 37.0609 46 36 46Z"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
                data-v-81fdc7f5=""
              ></path>
            </svg>
            <div class="title___1Cs5_" data-v-81fdc7f5="">89 88 50 80</div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default {
  data: function () {
    return {

      name: "",
      email: {
        value: "",
        valid: true,
      },

      inquiry_reason: {
        member: "onsker_kontakt",
        framework: "",

      },
      regNumber: "",
      regNumberTwo: "",
      age: "",
      phone: "",
      note: {
        text: "",
        maxlength: 255,
      },
      submitted: false,

    };
  },
  methods: {
    submit: async function () {
      const READER_API = import.meta.env.VITE_APP_READER_API;
      const POST_URL = import.meta.env.VITE_APP_CONTACT_FORM_URL;

      const formData = {
        email: this.email.value,
        inquiry_reason: this.inquiry_reason.member,
        name: this.name,
        phone: this.phone,
        reg_number: this.regNumber,
        desire: this.inquiry_reason.framework,
        age: this.age,
        reg_number_two: this.regNumberTwo,
        note: this.note.text,
      };

      const response = await fetch(POST_URL, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${READER_API}`,
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      this.submitted = true;
      console.log(data);
    },
    validate: function (type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value);
      }
    },
    // check for valid email adress
    isEmail: function (value) {
      return emailRegExp.test(value);
    },

  },
  watch: {
    // watching nested property
    "email.value": function (value) {
      this.validate("email", value);
    },
  },
};
</script>
<style scoped>
.contacts___2bySS[data-v-81fdc7f5] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: auto;
  padding: 2rem 2rem;
  background-color: var(--contacts-background-color);
  color: var(--contacts-text-color);
}

@media screen and (min-width: 64rem) {
  .contacts___2bySS[data-v-81fdc7f5] {
    width: 100%;
    padding: 2.5rem 2rem;
  }
}

.multi__section {
  padding: 0 var(--space-xl);
}

.debug {
  background-color: var(--action);

  padding: 30px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.debug pre {
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  white-space: pre-wrap;
}
.vue-form {
  padding: var(--space-m) var(--space-l);
  background-color: #fff;
}
.vue-form ul {
  padding: 0px;
}
.vue-form fieldset {
  margin: 24px 0 0 0;
  border: none;
}
.vue-form legend {
  padding-bottom: 10px;
  font-weight: 600;
  border-bottom: 1px solid #ecf0f1;
}
.vue-form div {
  position: relative;
  margin: 10px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form select,
.vue-form label {
  font-family: "Open Sans", sans-serif;
  color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select,
.vue-form legend {
  display: block;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  border-color: #2c3e50;
  -webkit-box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.vue-form .select {
  position: relative;
}
.vue-form .select::after {
  content: "";
  position: absolute;
  z-index: 1;
  right: 16px;
  top: 50%;
  margin-top: -8px;
  display: block;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpolygon%20fill%3D%22%232c3e50%22%20points%3D%220.9%2C5.5%203.1%2C3.4%208%2C8.3%2012.9%2C3.4%2015.1%2C5.5%208%2C12.6%20%09%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E")
    no-repeat center center;
  pointer-events: none;
}
.vue-form select {
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.vue-form select::-ms-expand {
  display: none;
}
.vue-form .vue-form-list {
  margin-top: 16px;
}
.vue-form .vue-form-list::after {
  clear: both;
  content: "";
  display: table;
}
.vue-form .vue-form-list li {
  display: inline-block;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0 26px 16px 0;
  float: left;
}
.vue-form input[type="radio"],
.vue-form input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 2;
}
.vue-form input[type="radio"] + label,
.vue-form input[type="checkbox"] + label {
  padding-left: 24px;
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="radio"] + label::after,
.vue-form input[type="checkbox"] + label::before,
.vue-form input[type="checkbox"] + label::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -8px;
  width: 16px;
  height: 16px;
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="checkbox"] + label::before {
  border: 1px solid #cfd9db;
  background: #ffffff;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="radio"] + label::after {
  border-radius: 50%;
}
.vue-form input[type="checkbox"] + label::before,
.vue-form input[type="checkbox"] + label::after {
  border-radius: 0.25em;
}
.vue-form input[type="radio"] + label::after,
.vue-form input[type="checkbox"] + label::after {
  background-color: #2c3e50;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
  display: none;
}
.vue-form input[type="radio"] + label::after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Ccircle%20fill%3D%22%23FFFFFF%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%2F%3E%0D%0A%3C%2Fsvg%3E");
}
.vue-form input[type="checkbox"] + label::after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20points%3D%225%2C8%207%2C10%2011%2C6%20%22%2F%3E%0D%0A%3C%2Fsvg%3E");
}
.vue-form input[type="radio"]:focus + label::before,
.vue-form input[type="checkbox"]:focus + label::before {
  -webkit-box-shadow: 0 0 5px rgba(44, 151, 222, 0.6);
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.6);
}
.vue-form input[type="radio"]:checked + label::after,
.vue-form input[type="checkbox"]:checked + label::after {
  display: block;
}
.vue-form input[type="radio"]:checked + label::before,
.vue-form input[type="radio"]:checked + label::after,
.vue-form input[type="checkbox"]:checked + label::before,
.vue-form input[type="checkbox"]:checked + label::after {
  -webkit-animation: cd-bounce 0.3s;
  animation: cd-bounce 0.3s;
}
.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: var(--secondary);
  border-radius: 0.25em;
  padding: 12px 20px;
  color: black;
  font-weight: bold;

  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.3s ease-in-out;
}
.no-touch .vue-form input[type="submit"]:hover {
  background: #42a2e1;
}
.vue-form input[type="submit"]:hover {
  background-color: black;
  color: var(--secondary);
  transform: scale(1.02);
}
.vue-form input[type="submit"]:focus {
  outline: none;
  background: #2b3e51;
}
.vue-form input[type="submit"]:active {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background: #e94b35;
  color: #ffffff;

  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.vue-form .error {
  border-color: #e94b35 !important;
}
.vue-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}
/* Change font size to 10 px for placeholder text */
input::-webkit-input-placeholder {
  font-size: 15px;
}
input:-moz-placeholder {
  /* Firefox 18- */
  font-size: 15px;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  font-size: 15px;
}
.vue-form .input-field input:-ms-input-placeholder {
  font-size: 15px;
}
.vue-form .input-field input:focus + .counter {
  background-color: #2b3e51;
}
/* animations */

@-webkit-keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
}
@keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}
</style>
