<template>
  <div class="contact-form">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        note: ''
      }
    }
  },
  methods: {
    async submitForm() {
      const READER_API = import.meta.env.VITE_APP_READER_API;
      const POST_URL = import.meta.env.VITE_APP_CONTACT_FORM_URL;
      const response = await fetch(POST_URL, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${READER_API}`,
        },
        body: JSON.stringify(this.form)
      });
      const data = await response.json();
      console.log(data);
    }
  }
};
</script>
<style scoped>
.contact-form {
  width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>