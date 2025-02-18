document.write(`
     <footer class="py-5">
      <div class="row">
        <div class="col-3 mb-3">
          <form>
            <h1>Store</h1>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Città, Regione, Via"
              />
              <button class="btn" type="button">Cerca</button>
            </div>
          </form>
        </div>
        <div class="col-3 mb-3">
          <form>
            <h1>Newsletter</h1>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden"
                >Email address</label
              >
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn" type="button">Subscribe</button>
            </div>
          </form>
        </div>
        <div class="col-3 mb-3">
          <form>
            <h1>Social</h1>
            <div class="social-icons">
              <img
                src="../footer/img/x.png"
                alt="x"
                width="36px"
                height="36px"
              /><img
                src="../footer/img/fb.webp"
                alt="fb"
                width="36px"
                height="36px"
              /><img
                src="../footer/img/yt.webp"
                alt="yt"
                width="36px"
                height="36px"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="row section-footer pt-4 px-4">
        <div class="col text-custom">
          <h5>Conosciamoci Meglio</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Chi Siamo</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Soluzioni per la tua azienda</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Lavora con noi</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Mappa del Sito</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">About</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3 text-custom">
          <h5>I tuoi acquisti facili</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Modalità di pagamento</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Modalità di spedizione</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Stime tempi di consegna</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Informativa prezzi e sconti</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Installazione e altri servizi</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >I nostri punti vendita</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Volantino</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Gift card</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3 text-custom">
          <h5>Sicurezza e trasparenza</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Condizioni di vendita</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Sicurezza dei pagamenti</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Garanzie</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Reso e diritto di recesso</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Risoluzione controversie</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Avvertenza legale</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Privacy Policy Assistenza Clienti</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Tuteliamo la tua privacy</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Utilizzo dei cookies</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Centro preferenze sulla privacy</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Prodotti sponsorizzati</a
              >
            </li>
          </ul>
        </div>

        <div class="col mb-3 text-custom">
          <h5>Al tuo servizio</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Lista Regali</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Social network</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Domande frequenti</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >I nostri servizi in negozio</a
              >
            </li>
          </ul>
        </div>
        <div class="col mb-3 text-custom">
          <h5>Area cliente</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Area personale</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom">Newsletter</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-custom"
                >Assistenza clienti</a
              >
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-sm-row justify-content-between pt-2 border-top text-custom"
        >
          <div>
            <p>
              Società XYZ S.r.l. - P.IVA 12345678901 - Capitale Sociale:
              €10.000,00 i.v. - REA: MI-1234567
            </p>
          </div>

          <div class="flex pagamenti">
            <img
              class="klarna lazyloaded"
              loading="lazy"
              data-src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.png"
              alt=""
              src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/visa.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/visa.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/visa-verificato.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/visa-verificato.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/mastercard.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/mastercard.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/mastercard-securcode.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/mastercard-securcode.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/amex.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/amex.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/amex-safekey.jpg"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/amex-safekey.jpg"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/apple.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/apple.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/paypal-ico.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/paypal-ico.png"
            />
            <img
              class="lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/postepay.jpg"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/postepay.jpg"
            />
            <img
              class="ls-is-cached lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/agos.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/agos.png"
            />
            <img
              class="ls-is-cached lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/thawte_NOT_removeokkkk.jpg"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/thawte_NOT_removeokkkk.jpg"
            />
            <img
              class="ls-is-cached lazyloaded"
              loading="lazy"
              data-src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/biscotto_medium_embossok.png"
              alt=""
              src="https://static1.unieuro.it/online/_ui/desktop/theme-Unieuro-restyling/dist/images/payment/biscotto_medium_embossok.png"
            />
          </div>
        </div>
      </div>
    </footer>
    </footer>
    `
);
