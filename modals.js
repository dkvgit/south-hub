// Функции для новых модалок
function showRevolutModal() { openModal('revolutModal'); }
function showWiseModal() { openModal('wiseModal'); }
function showBIDVModal() { openModal('bidvModal'); }


<!-- МОДАЛКА REVOLUT -->
<div id="revolutModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; border-radius:30px; padding:25px; max-width:350px; width:90%; margin:auto;">

    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
      <span style="font-size:2rem;">💎</span>
      <h3 style="color:var(--navy);">Revolut</h3>
    </div>

    <!-- Ссылка как в PayPal -->
    <a href="https://revolut.me/denissk" target="_blank" style="display:block; background:#0070ba; color:white; padding:15px; border-radius:50px; text-decoration:none; font-weight:600; text-align:center; margin-bottom:15px;">
      💳 Перевести через Revolut.me
    </a>

    <!-- SEPA реквизиты -->
    <div style="background:#f8fafc; border-radius:20px; padding:15px; margin-bottom:15px;">
      <div style="margin-bottom:10px;">
        <div style="color:#666; font-size:0.8rem;">IBAN (SEPA)</div>
        <div style="font-weight:600; display:flex; justify-content:space-between;">
          LT12 3250 0123 4567 8901
          <button onclick="copyText('LT123250012345678901')" style="background:none; border:none; color:var(--navy);">📋</button>
        </div>
      </div>
      <div style="margin-bottom:10px;">
        <div style="color:#666; font-size:0.8rem;">BIC</div>
        <div>REVOLT21</div>
      </div>
      <div>
        <div style="color:#666; font-size:0.8rem;">Получатель</div>
        <div>Den South-Hub</div>
      </div>
    </div>

    <button onclick="document.getElementById('revolutModal').style.display='none'" style="width:100%; background:transparent; border:1px solid var(--border-light); padding:12px; border-radius:50px; cursor:pointer;">
      Закрыть
    </button>
  </div>
</div>


<!-- МОДАЛКА WISE -->
<div id="wiseModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; border-radius:30px; padding:25px; max-width:350px; width:90%; margin:auto;">

    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
      <span style="font-size:2rem;">🌍</span>
      <h3 style="color:var(--navy);">Wise</h3>
    </div>

    <!-- Ссылка на профиль Wise -->
    <a href="https://wise.com/pay/denissk" target="_blank" style="display:block; background:#00b9ff; color:white; padding:15px; border-radius:50px; text-decoration:none; font-weight:600; text-align:center; margin-bottom:15px;">
      💳 Перевести через Wise
    </a>

    <!-- Реквизиты для переводов -->
    <div style="background:#f8fafc; border-radius:20px; padding:15px; margin-bottom:15px;">
      <div style="margin-bottom:10px;">
        <div style="color:#666; font-size:0.8rem;">EUR (SEPA)</div>
        <div style="font-weight:600; display:flex; justify-content:space-between;">
          BE12 3456 7890 1234
          <button onclick="copyText('BE12345678901234')" style="background:none; border:none; color:var(--navy);">📋</button>
        </div>
      </div>
      <div style="margin-bottom:10px;">
        <div style="color:#666; font-size:0.8rem;">USD</div>
        <div style="font-weight:600; display:flex; justify-content:space-between;">
          1234567890
          <button onclick="copyText('1234567890')" style="background:none; border:none; color:var(--navy);">📋</button>
        </div>
      </div>
      <div>
        <div style="color:#666; font-size:0.8rem;">Получатель</div>
        <div>Deniss Kabakovs</div>
      </div>
    </div>

    <button onclick="document.getElementById('wiseModal').style.display='none'" style="width:100%; background:transparent; border:1px solid var(--border-light); padding:12px; border-radius:50px; cursor:pointer;">
      Закрыть
    </button>
  </div>
</div>




<!-- МОДАЛКА BIDV -->
<div id="bidvModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; border-radius:30px; padding:25px; max-width:350px; width:90%; margin:auto;">

    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
      <img src="icons/bidv.png" style="width:32px; height:32px; object-fit:contain;" alt="BIDV">
      <h3 style="color:var(--navy);">BIDV Vietnam</h3>
    </div>

    <!-- Настоящий QR-код -->
    <div style="text-align:center; margin-bottom:20px;">
      <img src="icons/bidv_qr.jpg" style="width:200px; height:200px; border-radius:20px; box-shadow:0 10px 25px rgba(0,0,0,0.1);" alt="VietQR">
    </div>

    <!-- Номер счёта -->
    <div style="background:#f8fafc; border-radius:20px; padding:15px; margin-bottom:15px;">
      <div style="margin-bottom:10px;">
        <div style="color:#666; font-size:0.8rem;">Номер счёта</div>
        <div style="font-weight:600; display:flex; justify-content:space-between;">
          1234567890 (BIDV)
          <button onclick="copyText('1234567890')" style="background:none; border:none; color:var(--navy);">📋</button>
        </div>
      </div>
      <div>
        <div style="color:#666; font-size:0.8rem;">Получатель</div>
        <div>Den South-Hub</div>
      </div>
    </div>

    <p style="font-size:0.8rem; color:#666; text-align:center; margin-bottom:15px;">
      Сканируй QR в приложении BIDV или любом банке Вьетнама
    </p>

    <button onclick="document.getElementById('bidvModal').style.display='none'" style="width:100%; background:transparent; border:1px solid var(--border-light); padding:12px; border-radius:50px; cursor:pointer;">
      Закрыть
    </button>
  </div>
</div>



// Показать модальное окно
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        // Блокируем скролл основной страницы
        document.body.style.overflow = 'hidden';
    }
}

// Закрыть модальное окно
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        // Возвращаем скролл
        document.body.style.overflow = 'auto';
    }
}

// Функции-обертки для кнопок в HTML
function showCardModal() { openModal('cardModal'); }
function showBankModal() { openModal('bankModal'); }

// === Для QR-модалки ===
function showQR(coin, address, emoji) {
  const coinEmoji = document.getElementById('qrCoinEmoji');
  const codeDisplay = document.getElementById('qrCodeDisplay');

  if (coinEmoji) coinEmoji.innerText = emoji;
  if (codeDisplay) codeDisplay.innerText = address;

  const modal = document.getElementById('qrModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}
    openModal('qrModal');
}

// Копирование текста и показ уведомления
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('✨ Скопировано в буфер');
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
}

// Копирование всех банковских реквизитов разом
function copyAllBankDetails() {
    const details = `Банк: Sberbank\nSWIFT: SABRRUMM\nСчёт: RU12345678901234567890\nПолучатель: Deniss Kabakovs`;
    copyText(details);
}

// Универсальный Toast (уведомление внизу)
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerText = message;
        toast.style.display = 'block';

        // Автоматическое скрытие через 2 секунды
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    }
}

// Закрытие модалок при клике на фон
window.addEventListener('click', function(event) {
    const modals = ['revolutModal', 'wiseModal', 'bidvModal', 'cardModal', 'bankModal', 'qrModal'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});