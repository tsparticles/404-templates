$(document).ready(function () {
  const pages = $("#pages");

  $.get("data/pages.json", function (data) {
    $.each(data, function (idx, item) {
      const page = $("<div>");

      page.addClass("col-md-4");

      const card = $("<div>");

      card.addClass("card mb-4 shadow-sm");

      const image = $("<img>");

      image.addClass("bd-placeholder-img card-img-top");
      image.attr({
        width: "100%",
        height: 196,
        focusable: false,
        role: "img",
        ariaLabel: item.description,
        src: item.imageUrl,
      });

      card.append(image);

      const cardBody = $("<div>");

      cardBody.addClass("card-body");

      const cardText = $("<div>");

      cardText.addClass("card-text");
      cardText.text(item.description);

      cardBody.append(cardText);

      const cardContent = $("<div>");

      cardContent.addClass("d-flex justify-content-between align-items-center");

      const btnGroup = $("<div>");

      btnGroup.addClass("btn-group");

      const btn = $("<a>");

      btn.addClass("btn btn-sm btn-outline-secondary");
      btn.text("View");
      btn.attr({
        href: item.url,
        target: "_blank",
      });

      btnGroup.append(btn);

      cardContent.append(btnGroup);

      cardBody.append(cardContent);

      card.append(cardBody);

      page.append(card);

      pages.append(page);
    });
  });
});
