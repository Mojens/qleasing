<template>
  <div class="footer___2HeuL">
    <div class="content___1SSOd">
      <div class="image____uKec">
        <img
          alt="footer-logo"
          src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_448/v1/Logos/BILABONNEMENT_rgb_mmahqw.png"
        />
      </div>
      <div class="links-wrapper___z_X-m">
        <div class="links___1GmQz">
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Om Bilabonnement"
            to="/om-os"
            >Om Quickleasing
          </RouterLink>
          <RouterLink
            class="link___Zah3i link___394Eg"
            to="/faq"
            target="_self"
            title="FAQ"
            >FAQ</RouterLink
          ><RouterLink
            class="link___Zah3i link___394Eg"
            to="/indhold-pa-siden"
            target="_self"
            title="Indhold på siden"
            >Indhold på siden</RouterLink
          ><RouterLink
            class="link___Zah3i link___394Eg"
            to="/samarbejdspartnere"
            target="_self"
            title="Samarbejdspartnere"
            >Samarbejdspartnere</RouterLink
          ><a
            class="link___Zah3i link___394Eg"
            href="/kontakt"
            target="_self"
            title="Kontakt os"
            >Kontakt os</a
          >
        </div>
        <div class="links___1GmQz">
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Abonnementsvilkår"
            to="/abonnement-vilkaar"
            >Abonnementsvilkår
          </RouterLink>
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Afleveringsforsikring"
            to="/afleveringforsikring"
            >Afleveringsforsikring
          </RouterLink>
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Persondatapolitik hos Quickleasing"
            to="/persondatapolitik"
          >
            Persondatapolitik
          </RouterLink>
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Opbevaring af dine oplysninger"
            to="/opbevaring-af-dine-oplysninger"
          >
            Opbevaring af dine oplysninger
          </RouterLink>
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Samtykke"
            to="/samtykke"
            >Samtykke
          </RouterLink>
          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Privatlivspolitik"
            to="/privatlivspolitik"
            >Privatlivspolitik
          </RouterLink>

          <RouterLink
            class="link___Zah3i link___394Eg"
            target="_self"
            title="Information om cookies"
            to="/information-om-cookies"
            >Information om cookies
          </RouterLink>
        </div>
      </div>
      <div class="social-links___3vb_q">
        <a
          class="logo-link___3nPM5 social-link___3S4ka link___394Eg"
          href="https://www.facebook.com/Quickleasing/"
          target="_blank"
          title="Følg os på Facebook"
          ><img
            class="image___29-hw"
            src="https://res.cloudinary.com/digital-interdan-bilabonnement/image/upload/c_fit,q_80,w_224/gxrhpzle99uelvnaan4x_nr6fh9.svg"
          />
          <div class="title___3Zj6X">Følg os på Facebook</div>
        </a>
      </div>
    </div>
    <div class="divider___2EVUB"></div>
    <div class="address-info___yKNij">
      <div class="organization-name___2p6qI">Quickleasing A/S</div>
      <div class="details___2e0Mn">
        <div class="detail___YJBSq">Slotsherrensvej 411c</div>
        <div class="detail___YJBSq">
          2610<!-- -->
          <!-- -->Rødovre
        </div>
        <div class="detail___YJBSq">
          CVR-nr.
          <!-- -->37856827
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
};
</script>

<style scoped>
.link___394Eg {
  color: #1892c3;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (min-width: 64rem) {
  .link___394Eg {
    font-size: 1rem;
  }
}

.link___394Eg:visited {
  color: #1892c3;
}

.logo-link___3nPM5 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 5rem;
  padding: 0 0.5rem;
}

@media screen and (min-width: 23rem) {
  .logo-link___3nPM5 {
    height: 6rem;
  }
}

@media screen and (min-width: 64rem) {
  .logo-link___3nPM5 {
    height: 7rem;
  }
}

.logo-link___3nPM5 .image___29-hw {
  max-height: 100%;
  max-width: 100%;
}

.address-info___yKNij {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.address-info___yKNij .organization-name___2p6qI {
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  font-weight: bold;
}

@media screen and (min-width: 46.75rem) {
  .address-info___yKNij .organization-name___2p6qI {
    font-size: 1.2rem;
  }
}

.address-info___yKNij .details___2e0Mn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 0.8rem;
}

@media screen and (min-width: 46.75rem) {
  .address-info___yKNij .details___2e0Mn {
    font-size: 1rem;
  }
}

.address-info___yKNij .details___2e0Mn .detail___YJBSq {
  padding: 0.1rem;
}

.address-info___yKNij .details___2e0Mn .detail___YJBSq:not(:first-child) {
  margin-left: 0.5rem;
}

.footer___2HeuL {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 2rem 1.5rem 4rem;
}

@media screen and (min-width: 46.75rem) {
  .footer___2HeuL {
    width: 95%;
  }
}

@media screen and (min-width: 64rem) {
  .footer___2HeuL {
    width: 90%;
  }
}

@media screen and (min-width: 80rem) {
  .footer___2HeuL {
    width: 75%;
  }
}

.footer___2HeuL .content___1SSOd {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (min-width: 46.75rem) {
  .footer___2HeuL .content___1SSOd {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}

.footer___2HeuL .content___1SSOd .image____uKec {
  width: 8rem;
}

@media screen and (min-width: 46.75rem) {
  .footer___2HeuL .content___1SSOd .image____uKec {
    width: 8rem;
  }
}

@media screen and (min-width: 64rem) {
  .footer___2HeuL .content___1SSOd .image____uKec {
    width: 14rem;
  }
}

.footer___2HeuL .content___1SSOd .image____uKec img {
  max-width: 100%;
}

.footer___2HeuL .content___1SSOd .links-wrapper___z_X-m {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2rem;
}

@media screen and (min-width: 46.75rem) {
  .footer___2HeuL .content___1SSOd .links-wrapper___z_X-m {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2rem;
  }
}

@media screen and (min-width: 64rem) {
  .footer___2HeuL .content___1SSOd .links-wrapper___z_X-m {
    padding: 0 4rem;
  }
}

.footer___2HeuL .content___1SSOd .links-wrapper___z_X-m .links___1GmQz {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.footer___2HeuL
  .content___1SSOd
  .links-wrapper___z_X-m
  .links___1GmQz
  .link___Zah3i {
  padding: 0.5rem 0;
}

.footer___2HeuL
  .content___1SSOd
  .links-wrapper___z_X-m
  .links___1GmQz:not(:first-child) {
  margin-left: 2rem;
}

.footer___2HeuL .content___1SSOd .social-links___3vb_q {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-top: 2rem;
}

.footer___2HeuL .content___1SSOd .social-links___3vb_q .social-link___3S4ka {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 2.5rem;
  padding: 0.5rem 0;
}

.footer___2HeuL
  .content___1SSOd
  .social-links___3vb_q
  .social-link___3S4ka
  .title___3Zj6X {
  margin-left: 0.5rem;
}

.footer___2HeuL .divider___2EVUB {
  width: 100%;
  height: 2px;
  margin: 3rem 0;
  background-color: #f2f2f2;
}
</style>
