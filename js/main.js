$(document).ready(function () {
  var pages = $("#pages");

  $.get("data/pages.json", function (data) {
    $.each(data, function (idx, item) {
      var page = $("<div>");

      page.addClass("col-md-4");

      var card = $("<div>");

      card.addClass("card mb-4 shadow-sm");

      var image = $("<img>");

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

      var cardBody = $("<div>");

      cardBody.addClass("card-body");

      var cardText = $("<div>");

      cardText.addClass("card-text");
      cardText.text(item.description);

      cardBody.append(cardText);

      var cardContent = $("<div>");

      cardContent.addClass("d-flex justify-content-between align-items-center");

      var btnGroup = $("<div>");

      btnGroup.addClass("btn-group");

      var btn = $("<a>");

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
