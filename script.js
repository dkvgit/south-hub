// script.js





// === Модалки платежей ===
function showRevolutModal() { openModal('revolutModal'); }
function showWiseModal() { openModal('wiseModal'); }
function showBIDVModal() { openModal('bidvModal'); }
function showBIDVQR() { openModal('bidvQRModal'); }
function showCardModal() { openModal('cardModal'); }
function showBankModal() { openModal('bankModal'); }

// === QR-модалка для крипты ===
function showQR(coin, address, emoji) {
    const coinEmoji = document.getElementById('qrCoinEmoji');
    const codeDisplay = document.getElementById('qrCodeDisplay');

    if (coinEmoji) coinEmoji.innerText = emoji;
    if (codeDisplay) codeDisplay.innerText = address;

    openModal('qrModal');
}

// === Копирование текста ===
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('✨ Скопировано!');
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
        alert('Не удалось скопировать. Попробуй вручную: Ctrl+C');
    });
}

// === Копирование всех банковских реквизитов ===
function copyAllBankDetails() {
    const details = `Банк: Sberbank\nSWIFT: SABRRUMM\nСчёт: RU12345678901234567890\nПолучатель: Deniss Kabakovs`;
    copyText(details);
}

// === Toast уведомление ===
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerText = message;
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    }
}

// Закрытие модалок при клике на тёмный фон
window.addEventListener('click', function(event) {
    // Список всех модалок
    const modals = [
        'bybitModal',
        'binanceModal',
        'okxModal',
        'metamaskModal',          // добавил Metamask
        'revolutModal',
        'wiseModal',
        'bidvModal',
        'cryptoUsdtModal',
        'cryptoBtcModal',
        'creatorPatreonModal',
        'creatorKofiModal',
        'creatorBoostyModal',
        'creatorDonationAlertsModal',
        'cardModal',
        'bankModal',
        'sberModal'
    ];

    modals.forEach(id => {
        const modal = document.getElementById(id);
        // Закрываем, если кликнули именно по overlay (самой модалке)
        if (modal && event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // возвращаем скролл страницы
        }
    });
});



// Закрытие модалки по кнопке "Назад" (Android/Windows)
window.addEventListener('popstate', function(event) {
    // Проверяем, открыта ли какая-то модалка
    const modals = ['revolutModal', 'wiseModal', 'bidvModal', 'cardModal', 'bankModal', 'qrModal', 'bidvQRModal'];
    let anyModalOpen = false;

    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            anyModalOpen = true;
        }
    });

    // Если модалка была открыта - добавляем состояние в историю
    if (anyModalOpen) {
        // Добавляем состояние, чтобы кнопка "Назад" работала правильно
        history.pushState({modal: 'closed'}, '');
    }
});

// Добавляем состояние при открытии модалки
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Добавляем состояние в историю, чтобы кнопка "Назад" сработала
        history.pushState({modal: id}, '');
    }
}

// Обнови существующую функцию openModal



// Копирование всех реквизитов Wise
function copyWiseAll() {
  const details = `WISE\n\nПеревод по ссылке: @denissk128\nhttps://wise.com/pay/me/denissk128\n\n🏦 SWIFT РЕКВИЗИТЫ\nПолучатель: Deniss Kabakovs\nIBAN: BE48 9677 8076 8827\nSWIFT/BIC: TRWIBEB1XXX\n\nWise, Rue du Trône 100, 3rd floor\nBrussels, 1050, Belgium`;
  copyText(details);
}

// Копирование всех реквизитов Revolut
function copyRevolutAll() {
  const details = `REVOLUT (Euro)\n\nПеревод по ссылке: @denmailde\nhttps://revolut.me/denmailde\n\n💶 EURO РЕКВИЗИТЫ\nBeneficiary: Deniss Kabakovs\nIBAN: LT67 3250 0982 5028 7638\nBIC/SWIFT: REVOLT21\nCorrespondent BIC: CHASDEFX\n\nRevolut Bank UAB\nKonstitucijos ave. 21B, 08130\nVilnius, Lithuania`;
  copyText(details);
}


// Функции для крипты
function showCryptoModal(type) {
    const modalId = {
        'btc': 'cryptoBtcModal',
        'eth': 'cryptoEthModal',
        'ton': 'cryptoTonModal',
        'usdt': 'cryptoUsdtModal'
    }[type];

    if (modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }
}

// Универсальная функция копирования
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Показываем сам текст, который скопировали
    showToast(`📋 Скопировано: ${text}`);
  }).catch(err => {
    console.error('Ошибка копирования: ', err);
    showToast('❌ Ошибка копирования');
  });
}

// Функция для тоста (если еще нет)
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}


// Функция для открытия модалок креаторов
function showCreatorModal(type) {
    const modalId = {
        'patreon': 'creatorPatreonModal',
        'kofi': 'creatorKofiModal',
        'boosty': 'creatorBoostyModal',
        'donationalerts': 'creatorDonationAlertsModal'
    }[type];

    if (modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }
}

// Обнови функцию закрытия
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Функция для тоста
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}


// Функция для Bybit
function showBybitModal() {
    document.getElementById('bybitModal').style.display = 'flex';
}

// Обнови функцию для крипты
function showCryptoModal(type) {
    const modalId = {
        'usdt': 'cryptoUsdtModal',
        'usdc': 'cryptoUsdcModal',
        'btc': 'cryptoBtcModal',
        'eth': 'cryptoEthModal'
    }[type];

    if (modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }
}

// Копирование всех реквизитов BIDV
function copyBIDVAll() {
  const details = `BIDV Vietnam\n\nНомер счёта: 8845755423\nПолучатель: Deniss Kabakovs`;
  copyText(details);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    if (!toast) return;

    // Очищаем тост
    toast.innerHTML = '';

    // Создаём первую часть "📋 Скопировано:"
    const labelSpan = document.createElement('span');
    labelSpan.innerText = '📋 Скопировано: ';
    labelSpan.style.color = '#aaa'; // светло-серый

    // Создаём вторую часть — адрес
    const addressSpan = document.createElement('span');
    addressSpan.innerText = text;
    addressSpan.style.color = '#ffd966'; // жёлтый
    addressSpan.style.fontWeight = '600';

    // Добавляем в тост
    toast.appendChild(labelSpan);
    toast.appendChild(addressSpan);

    // Показываем
    toast.style.display = 'block';

    // Автоскрытие через 2 секунды
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2000);
  }).catch(err => {
    console.error('Ошибка копирования: ', err);
    alert('Не удалось скопировать');
  });
}

function switchBybitTab(tab) {
  // Скрываем всё
  document.getElementById('bybitUsdt').style.display = 'none';
  document.getElementById('bybitUsdc').style.display = 'none';
  document.getElementById('bybitUid').style.display = 'none';

  // Сбрасываем цвета всех кнопок
  document.getElementById('tabUsdtBtn').style.background = '#ddd';
  document.getElementById('tabUsdtBtn').style.color = '#333';
  document.getElementById('tabUsdcBtn').style.background = '#ddd';
  document.getElementById('tabUsdcBtn').style.color = '#333';
  document.getElementById('tabUidBtn').style.background = '#ddd';
  document.getElementById('tabUidBtn').style.color = '#333';

  // Включаем нужную вкладку и подсвечиваем её кнопку
  if (tab === 'usdt') {
    document.getElementById('bybitUsdt').style.display = 'block';
    document.getElementById('tabUsdtBtn').style.background = '#26a17b';
    document.getElementById('tabUsdtBtn').style.color = 'white';
  } else if (tab === 'usdc') {
    document.getElementById('bybitUsdc').style.display = 'block';
    document.getElementById('tabUsdcBtn').style.background = '#26a17b';
    document.getElementById('tabUsdcBtn').style.color = 'white';
  } else if (tab === 'uid') {
    document.getElementById('bybitUid').style.display = 'block';
    document.getElementById('tabUidBtn').style.background = '#F7B731';
    document.getElementById('tabUidBtn').style.color = 'white';
  }
}


function switchBinanceTab(tab) {
  // Скрываем всё
  document.getElementById('binanceBtc').style.display = 'none';
  document.getElementById('binanceEth').style.display = 'none';
  document.getElementById('binanceUsdt').style.display = 'none';

  // Сбрасываем цвета кнопок
  document.getElementById('binanceTabBtcBtn').style.background = '#ddd';
  document.getElementById('binanceTabBtcBtn').style.color = '#333';
  document.getElementById('binanceTabEthBtn').style.background = '#ddd';
  document.getElementById('binanceTabEthBtn').style.color = '#333';
  document.getElementById('binanceTabUsdtBtn').style.background = '#ddd';
  document.getElementById('binanceTabUsdtBtn').style.color = '#333';

  // Показываем выбранное
  if (tab === 'btc') {
    document.getElementById('binanceBtc').style.display = 'block';
    document.getElementById('binanceTabBtcBtn').style.background = '#F0B90B';
    document.getElementById('binanceTabBtcBtn').style.color = 'white';
  } else if (tab === 'eth') {
    document.getElementById('binanceEth').style.display = 'block';
    document.getElementById('binanceTabEthBtn').style.background = '#F0B90B';
    document.getElementById('binanceTabEthBtn').style.color = 'white';
  } else if (tab === 'usdt') {
    document.getElementById('binanceUsdt').style.display = 'block';
    document.getElementById('binanceTabUsdtBtn').style.background = '#F0B90B';
    document.getElementById('binanceTabUsdtBtn').style.color = 'white';
  }
}


// Metamask
function switchMetamaskTab(tab) {
  ['mmEth','mmArb','mmTron','mmBtc'].forEach(id => document.getElementById(id).style.display = 'none');
  ['mmEthBtn','mmArbBtn','mmTronBtn','mmBtcBtn'].forEach(id => {
    document.getElementById(id).style.background = '#ddd';
    document.getElementById(id).style.color = '#333';
  });
  document.getElementById('mm' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
  document.getElementById('mm' + tab.charAt(0).toUpperCase() + tab.slice(1) + 'Btn').style.background = '#627eea';
  document.getElementById('mm' + tab.charAt(0).toUpperCase() + tab.slice(1) + 'Btn').style.color = 'white';
}

// OKX
function switchOkxTab(tab) {
  ['okxUsdc','okxBtc','okxEth'].forEach(id => document.getElementById(id).style.display = 'none');
  ['okxUsdcBtn','okxBtcBtn','okxEthBtn'].forEach(id => {
    document.getElementById(id).style.background = '#ddd';
    document.getElementById(id).style.color = '#333';
  });
  document.getElementById('okx' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
  document.getElementById('okx' + tab.charAt(0).toUpperCase() + tab.slice(1) + 'Btn').style.background = '#1A1A1A';
  document.getElementById('okx' + tab.charAt(0).toUpperCase() + tab.slice(1) + 'Btn').style.color = 'white';
}

// === Сбербанк ===
function showSberModal() {
    openModal('sberModal');
}

function switchSberTab(tab) {
    // Скрываем все табы
    const cardTab = document.getElementById('sberCard');
    const phoneTab = document.getElementById('sberPhone');

    if (cardTab) cardTab.style.display = 'none';
    if (phoneTab) phoneTab.style.display = 'none';

    // Сбрасываем цвета кнопок
    const cardBtn = document.getElementById('tabSberCardBtn');
    const phoneBtn = document.getElementById('tabSberPhoneBtn');

    if (cardBtn) {
        cardBtn.style.background = '#ddd';
        cardBtn.style.color = '#333';
    }
    if (phoneBtn) {
        phoneBtn.style.background = '#ddd';
        phoneBtn.style.color = '#333';
    }

    // Показываем выбранный таб и подсвечиваем кнопку
    if (tab === 'card') {
        if (cardTab) cardTab.style.display = 'block';
        if (cardBtn) {
            cardBtn.style.background = '#26a17b';
            cardBtn.style.color = 'white';
        }
    } else if (tab === 'phone') {
        if (phoneTab) phoneTab.style.display = 'block';
        if (phoneBtn) {
            phoneBtn.style.background = '#26a17b';
            phoneBtn.style.color = 'white';
        }
    }
}

// Функция для копирования всех реквизитов Сбербанка (если нужна)
function copySberAll() {
    const details = `СБЕРБАНК\n\nНомер карты: 5469 3800 8049 6952\nПолучатель: Фёдор C.\nТелефон для СБП: +7 (999) 123-45-67`;
    copyText(details);
}



// Функция для сохранения QR кода
function saveQR(imagePath) {
  const link = document.createElement('a');
  link.href = imagePath;
  link.download = imagePath.split('/').pop(); // сохраняет с оригинальным именем
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('✅ QR код сохранен');
}

// Функция для шеринга QR кода
function shareQR(imagePath, title) {
  if (navigator.share) {
    fetch(imagePath)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'qr.jpg', { type: 'image/jpeg' });
        navigator.share({
          title: title,
          files: [file]
        }).catch(err => console.log('Share canceled', err));
      });
  } else {
    // Если Web Share API не поддерживается, просто копируем ссылку
    copyText(window.location.origin + '/' + imagePath);
    showToast('✅ Ссылка на QR скопирована');
  }
}


// Metamask
function showMetamaskModal() {
  openModal('metamaskModal');
}