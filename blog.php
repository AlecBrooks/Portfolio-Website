<?php
  $posts = array(
    array(
      "title" => "Post 1",
      "image" => "post1.jpg",
      "content" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tincidunt nisi, ut venenatis tortor euismod non."
    ),
    array(
      "title" => "Post 2",
      "image" => "post2.jpg",
      "content" => "Pellentesque ultrices volutpat sem at tristique. Nam rutrum vestibulum justo, vel volutpat enim elementum vel."
    ),
    array(
      "title" => "Post 3",
      "image" => "post3.jpg",
      "content" => "Aliquam vel blandit justo. Integer volutpat consequat ipsum quis tristique. Morbi convallis congue nulla vel semper."
    )
  );
?>

<?php foreach ($posts as $post): ?>
  <div class="post">
    <h2><?php echo $post["title"]; ?></h2>
    <img src="<?php echo $post["image"]; ?>" alt="<?php echo $post["title"]; ?>">
    <p><?php echo $post["content"]; ?></p>
  </div>
<?php endforeach; ?>