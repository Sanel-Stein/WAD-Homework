window.onload = function() {
    fetch('https://api.npoint.io/63cd77d7396472695a97')
        .then((res) => res.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
            let div = this.document.createElement("div");
            div.className = 'content';

            let header = this.document.createElement("header");

            let icon = this.document.createElement("img");
            icon.src = json[i].icon;
            icon.className = 'icon';
            header.appendChild(icon);

            let author = this.document.createElement("p");
            author.innerText = json[i].author;
            header.appendChild(author);

            let date = this.document.createElement("p");
            date.innerText = json[i].date;
            header.appendChild(date);
            div.append(header);

            if (json[i].image) {
                let image = this.document.createElement("img");
                image.src = json[i].image;
                div.appendChild(image);
            }
            let text = this.document.createElement("p");
            text.innerText = json[i].text;
            div.appendChild(text);

            let like = this.document.createElement("a");
            like.href = '#';
            let likeimg = this.document.createElement("img");
            likeimg.src = json[i].like;
            likeimg.className = 'icon';
            like.appendChild(likeimg);
            div.appendChild(like);

            document.querySelector("section").appendChild(div);
            }
        })
}