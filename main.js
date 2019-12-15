new MutationObserver(function (mutations) {
	let panel = Array.
		from(mutations[0].addedNodes).
		find(node => node.id === 'irc_bg').
		querySelector('#irc_cc');
	for (let table of Array.from(panel.querySelectorAll('table[class*="irc_but_r"]'))) {
		let button = table.rows[0].insertCell(2);
		let a = document.createElement('a');
		a.innerHTML = '<span>Full</span>';	
		a.addEventListener('click', function (event) {
			let itemId = panel.querySelector('div[style*="translate3d(0px, 0px, 0px)"]').getAttribute('data-item-id');
			let itemMeta = Array.
				from(document.querySelectorAll('#rg_s div[class*="rg_meta"]')).
				find(metaDiv => metaDiv.innerHTML.includes(itemId)).
				innerHTML;
			window.open(JSON.parse(itemMeta)['ou'], '_target');				
		});
		button.appendChild(a);
	}
	this.disconnect();
}).observe(document.getElementById('isr_mc'), {childList: true});
